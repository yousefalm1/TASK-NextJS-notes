import { useState } from "react";

import TopicInputList from "./TopicInputList";

function CreateNoteForm({ closeModal }) {
  const [title, setTitle] = useState("");
  const [topics, setTopics] = useState([]);
  const [body, setBody] = useState("");
  // const queryClient = useQueryClient();
  // const { mutate: addNote } = useMutation({
  //   mutationFn: () =>
  //     createNote({
  //       title,
  //       topic: topics,
  //       body,
  //     }),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["notes"]);
  //     closeModal();
  //   },
  // });
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // addNote();
    setTitle("");
    setTopics([]);
    setBody("");
  };

  return (
    <>
      <h2 className="text-3xl text-white font-semibold mb-6">Add Note</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-white text-sm font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="topics"
            className="block text-white text-sm font-medium mb-2"
          >
            Topics
          </label>
          <TopicInputList topics={topics} setTopics={setTopics} />
        </div>
        <div className="mb-6">
          <label
            htmlFor="body"
            className="block text-white text-sm font-medium mb-2"
          >
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
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