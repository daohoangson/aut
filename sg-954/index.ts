import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  const { js, timeout } = req.query;
  if (typeof js !== "string") {
    const jsTimeout = Math.max(1, Math.min(30, parseInt(timeout ?? "5")));
    res
      .setHeader("Content-Type", "text/html")
      .send(`<body><script src="/sg-954?js=${jsTimeout}"></script>The SCRIPT will load after ${jsTimeout}s.</body>`);
  } else {
    setTimeout(() => {
      res
        .setHeader("Content-Type", "application/javascript")
        .send("console.log('Loaded!');");
    }, parseInt(js) * 1000);
  }
}
