import type { NextApiRequest, NextApiResponse } from 'next'

const userRegister = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req)

  if (req.method === 'POST') {
    return res.json({ user: req.body })
  }

  return res.status(500).json({ msg: 'Error' })
}

export default userRegister