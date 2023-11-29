import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  res
    .setHeader("Content-Type", "text/html")
    .send(`
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>
<body>
  <p>
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
  </p>
  
  <iframe loading="lazy" style="border: none; overflow: hidden;" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Felenaakrita%2Fposts%2Fpfbid02LsKGy5Af8KrZ1EPRg4AjPCLxMjN5sCinXDVaNpG95ovBavjYNgsS6u1ZvhdWUqjCl&amp;show_text=true&amp;width=500" width="500" height="170" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe>
  
  <p>
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
    Blah blah blah.
  </p>
</body>
  `);
}
