import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"
import { formatAmountForStripe } from "../../../utils/stripe-helpers"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      amount,
      allocation,
      name,
      email,
    }: {
      amount: number
      allocation: string
      name: string
      email: string
    } = req.body

    try {
      // Create Checkout Sessions from body params
      const params: Stripe.Checkout.SessionCreateParams = {
        mode: "payment", // Add this required field
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "myr",
              product_data: {
                name: `Donation - ${allocation}`,
                description: "Supporting refugee education in Malaysia",
              },
              unit_amount: formatAmountForStripe(amount, "myr"),
            },
            quantity: 1,
          },
        ],
        customer_email: email,
        metadata: {
          donor_name: name,
          allocation: allocation,
        },
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/fundraising`,
      }

      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params)

      res.status(200).json(checkoutSession)
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message })
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}
