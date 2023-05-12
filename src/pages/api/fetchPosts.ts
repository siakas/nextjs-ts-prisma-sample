import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export const handler = async (
  _request: NextApiRequest,
  response: NextApiResponse
) => {
  try {
    const data = await prisma.post.findMany()

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return response.status(200).json({ data })
  } catch (error) {
    console.error(error)
  }
}
