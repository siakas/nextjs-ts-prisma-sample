import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export const handler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { title, description } = JSON.parse(request.body)

  try {
    const data = await prisma.post.create({
      select: {
        id: true,
        title: true,
        description: true,
      },
      data: {
        title,
        description,
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return response.status(200).json({ data })
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    return response.status(500).json({ error })
  }
}
