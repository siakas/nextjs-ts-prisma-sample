import type { ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CreatePage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()

  const handleOnSubmit = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/createPost`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
    })

    void router.push('/')
  }

  const handleOnChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleOnChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-3">
      <label htmlFor="title" className="font-bold text-teal-700">
        タイトル
      </label>
      <input
        type="text"
        name="title"
        className="w-full border p-2"
        onChange={handleOnChangeTitle}
      />

      <label htmlFor="description" className="font-bold text-teal-700">
        説明
      </label>
      <input
        type="text"
        name="description"
        className="w-full border p-2"
        onChange={handleOnChangeDescription}
      />

      <div className="mt-10 text-center">
        <button
          type="submit"
          className="inline-block rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          作成する
        </button>
      </div>
    </form>
  )
}

export default CreatePage
