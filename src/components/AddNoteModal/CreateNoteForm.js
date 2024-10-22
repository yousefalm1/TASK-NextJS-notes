import { createNote } from "@/actions/notes";

import TopicInputList from "./TopicInputList";

function CreateNoteForm({ closeModal }) {
  return (
    <>
      <h2 className="text-3xl text-white font-semibold mb-6">Add Note</h2>
      <form action={createNote} onSubmit={closeModal}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-white text-sm font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="topic"
            className="block text-white text-sm font-medium mb-2"
          >
            Topics
          </label>
          <TopicInputList />
        </div>
        <div className="mb-6">
          <label
            htmlFor="body"
            className="block text-white text-sm font-medium mb-2"
          >
            Body
          </label>
          <textarea
            name="body"
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateNoteForm