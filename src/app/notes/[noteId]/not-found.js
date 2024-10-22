import Link from 'next/link'

export default function NoteNotFound() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold mb-8">Note not found 😵</h1>
        <p className="text-2xl leading-relaxed text-left">
          Could not find the note you were looking for
        </p>
        <Link href="/notes" className=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
          Return To Notes
        </Link>
      </div>
    </div>
  )
}