import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.query.secret !== process.env.REVALIDATE_SECRET) return res.status(401).json({ message: 'Invalid token' })

	try {
		await res.unstable_revalidate('/')
		return res.json({ revalidated: true })
	} catch (err) {
		return res.status(500).send('Error revalidating')
	}
}

export default handler
