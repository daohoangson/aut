import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (_: VercelRequest, res: VercelResponse) {
  res
    .setHeader("Location", "https://github.com/daohoangson/aut")
    .status(302)
    .end();
}
