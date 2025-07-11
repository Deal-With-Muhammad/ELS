"use client";

import { useState, type FormEvent } from "react";
import getStripe from "../utils/get-stripe";
import { fetchPostJSON } from "../utils/api-helpers";

interface CheckoutFormProps {
  selectedAmount: number;
  allocation: string;
  name: string;
  email: string;
}

export default function CheckoutForm({
  selectedAmount,
  allocation,
  name,
  email,
}: CheckoutFormProps) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!selectedAmount || selectedAmount <= 0) {
      alert("Please select a valid donation amount");
      setLoading(false);
      return;
    }

    if (!name || !email) {
      alert("Please fill in your name and email");
      setLoading(false);
      return;
    }

    try {
      console.log("Sending donation data:", {
        amount: selectedAmount,
        allocation,
        name,
        email,
      });

      // Create a Checkout Session
      const checkoutSession = await fetchPostJSON("/api/checkout_sessions", {
        amount: selectedAmount,
        allocation: allocation,
        name: name,
        email: email,
      });

      console.log("Checkout session response:", checkoutSession);

      if (checkoutSession.statusCode === 500) {
        console.error("Server error:", checkoutSession.message);
        alert(`Payment error: ${checkoutSession.message}`);
        setLoading(false);
        return;
      }

      // Redirect to Checkout
      const stripe = await getStripe();
      const { error } = await stripe!.redirectToCheckout({
        sessionId: checkoutSession.id,
      });

      if (error) {
        console.warn("Stripe redirect error:", error.message);
        alert(`Payment error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <button
      type="button"
      onClick={handleSubmit}
      disabled={loading}
      className="w-full bg-[#2c5f9e] hover:bg-[#1a4370] disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-all hover:transform hover:-translate-y-1 shadow-lg disabled:transform-none"
    >
      {loading ? "Processing..." : "Contribute Now"}
    </button>
  );
}
