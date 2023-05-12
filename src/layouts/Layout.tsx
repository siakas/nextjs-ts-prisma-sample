import type { ReactNode } from 'react'
import Header from '@/components/Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mb-5 flex h-screen flex-col gap-5">
      <Header />

      <div className="mx-6 flex flex-1 flex-col">
        <div className="w-full flex-1 rounded-md bg-white p-6">{children}</div>
      </div>
    </div>
  )
}

export default Layout
