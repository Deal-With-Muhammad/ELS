import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id: string = req.query.id as string
  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect CheckoutSession ID.")
    }
    const checkout_session: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(id, {
      expand: ["payment_intent"],
    })

    res.status(200).json(checkout_session)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
