import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#8294C4] p-6 text-white">
      <Link href="/" className="text-base font-bold">
        Vercel Postgres Post
      </Link>
      <Link href="/create">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2"
        >
          <AiOutlinePlus color="white" />
          新規追加
        </button>
      </Link>
    </div>
  )
}

export default Header
