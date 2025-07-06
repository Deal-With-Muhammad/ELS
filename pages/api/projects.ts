import type { NextApiRequest, NextApiResponse } from "next"
import { getProjects } from "../../lib/database"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const projects = getProjects()
    res.status(200).json(projects)
  } else {
    res.setHeader("Allow", "GET")
    res.status(405).end("Method Not Allowed")
  }
}
