// @ts-check

/**
 * @param {import("@vercel/node").VercelRequest} req 
 * @param {import("@vercel/node").VercelResponse} res 
 * @returns 
 */
export default function (req, res) {
  const number = req.query['number'] ?? '123456';
  return res.setHeader('Content-Type', 'text/html')
    .send(`<body>Blah blah <span id="number">${number}</span> foo foo.</body>`);
}
