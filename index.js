// @ts-check

/**
 * @param {import("@vercel/node").VercelRequest} _
 * @param {import("@vercel/node").VercelResponse} res
 */
export default function (_, res) {
  res
    .setHeader("Location", "https://github.com/daohoangson/aut")
    .status(302)
    .end();
}
