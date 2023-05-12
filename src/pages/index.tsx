import type { Post } from '@/types/PostType'

type HomeProps = {
  posts: Post[]
}

// export const getServerSideProps = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchPosts`)

//   const json = await res.json()
//   const posts = json.data

//   return {
//     props: {
//       posts,
//     },
//   }
// }

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <p>hogehoge</p>
    </>
  )
}

export default Home
