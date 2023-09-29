import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  const number = req.query["number"] ?? "123456";
  res
    .setHeader("Content-Type", "text/html")
    .send(`<body>Blah blah <span id="number">${number}</span> foo foo.</body>`);
}
