import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  const shouldActSlow = req.query["slow"] === "1";
  if (!shouldActSlow) {
    res
      .setHeader("Content-Type", "text/html")
      .send(`<body><script src="/sg-954?slow=1"></script>The SCRIPT src will timeout after 30s.</body>`);
  }
}
