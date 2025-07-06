"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { fetchPostJSON } from "../utils/api-helpers";
import { CheckCircle, XCircle, ArrowLeft } from "lucide-react";

export default function ResultPage({ navigations }) {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCheckoutSession = async () => {
      if (!router.query.session_id) return;

      try {
        const session = await fetchPostJSON(
          `/api/checkout_sessions/${router.query.session_id}`
        );
        setSession(session);
      } catch (err) {
        console.error("Error fetching session:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCheckoutSession();
  }, [router.query.session_id]);

  if (loading) {
    return (
      <Layout navigations={navigations}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2c5f9e] mx-auto mb-4"></div>
            <p className="text-[#6c757d]">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const isSuccess = session?.payment_status === "paid";

  return (
    <Layout navigations={navigations}>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          {isSuccess ? (
            <>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-[#2c5f9e] mb-2">
                Thank You!
              </h1>
              <p className="text-[#6c757d] mb-6">
                Your donation of RM {(session.amount_total / 100).toFixed(2)}{" "}
                has been processed successfully.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold text-[#2c3e50] mb-2">
                  Donation Details:
                </h3>
                <p className="text-sm text-[#6c757d]">
                  <strong>Amount:</strong> RM{" "}
                  {(session.amount_total / 100).toFixed(2)}
                </p>
                <p className="text-sm text-[#6c757d]">
                  <strong>Allocation:</strong>{" "}
                  {session.metadata?.allocation || "General"}
                </p>
                <p className="text-sm text-[#6c757d]">
                  <strong>Donor:</strong> {session.metadata?.donor_name}
                </p>
                <p className="text-sm text-[#6c757d]">
                  <strong>Payment ID:</strong> {session.payment_intent?.id}
                </p>
              </div>
              <p className="text-sm text-[#6c757d] mb-6">
                You will receive a confirmation email shortly with your donation
                receipt.
              </p>
            </>
          ) : (
            <>
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-red-600 mb-2">
                Payment Cancelled
              </h1>
              <p className="text-[#6c757d] mb-6">
                Your donation was not processed. No charges were made to your
                account.
              </p>
            </>
          )}

          <button
            onClick={() => router.push("/fundraising")}
            className="inline-flex items-center gap-2 bg-[#2c5f9e] hover:bg-[#1a4370] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Fundraising
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  // You'll need to import your getNavigation function
  // const navigations = (await getNavigation(locale)) ?? [];
  const navigations = []; // Placeholder
  return {
    props: { navigations },
    revalidate: 1,
  };
}
