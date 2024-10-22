import { fetchNoteById } from "@/actions/notes";
import Image from "next/image";

async function Note({ params }) {
  const { noteId } = await params;

  const note = await fetchNoteById(noteId)

  const { title, user, topic, body } = note;

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <Image
            src={user.image}
            alt={user.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full mr-2"
          />
          <h2 className="text-2xl text-white font-semibold">{user.name}</h2>
        </div>
        <h3 className="text-xl text-white font-semibold mb-4">{title}</h3>
        <div className="mb-4">
          <h4 className="text-lg text-white font-medium mb-2">Topics:</h4>
          <ul className="list-disc list-inside text-white">
            {topic?.map((topic, index) => (
              <li key={topic + index}>{topic}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg text-white font-medium mb-2">Body:</h4>
          <p className="text-white">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Note;
