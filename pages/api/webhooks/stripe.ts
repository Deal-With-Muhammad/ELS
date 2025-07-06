import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"
import { addDonation } from "../../../lib/database"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
})

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const sig = req.headers["stripe-signature"]!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
    } catch (err) {
      console.log(`Webhook signature verification failed.`, err.message)
      return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session

        // Add donation to database
        if (session.payment_status === "paid") {
          const amount = session.amount_total! / 100 // Convert from cents
          const allocation = session.metadata?.allocation || "general"
          const donor_name = session.metadata?.donor_name || "Anonymous"
          const donor_email = session.customer_email || ""

          // Map allocation names to project IDs
          const allocationMap: { [key: string]: string } = {
            "Where Most Needed": "general",
            "Student Sponsorship": "sponsor",
            "Arm Rest Chairs": "chairs",
            "Classroom Partitions": "partitions",
            "Textbooks Printing": "books",
            "Air Conditioning": "aircon",
          }

          const projectId = allocationMap[allocation] || "general"

          addDonation({
            amount,
            allocation: projectId,
            donor_name,
            donor_email,
            stripe_session_id: session.id,
          })

          console.log(`Donation recorded: ${amount} MYR for ${allocation}`)
        }
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    res.json({ received: true })
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
}
