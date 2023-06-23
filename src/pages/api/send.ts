// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let urlParam = req.url?.split('=')[1]
  if(!urlParam?.includes('http')) {
    urlParam = 'http://' + urlParam
  }
  if(urlParam) {
    fetch(urlParam, ).then((response) => response.text()).then((response) => {
      res.status(200).json({html: response})
    }).catch(() => {
      res.status(404).json({ message: "request failed" });
    })
  } else {
    res.status(404).json({ message: "missing url" });
  }
}
