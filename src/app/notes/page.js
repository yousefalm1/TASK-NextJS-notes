import { fetchNotes } from "@/actions/notes";
import AddNoteModal from "@/components/AddNoteModal";
import NoteList from "@/components/NoteList";

async function Notes() {
  const notes = await fetchNotes()

  return (
    <div className="p-5 min-h-screen bg-gray-900">
      <AddNoteModal />
      <NoteList notes={notes} />
    </div>
  );
};

export default Notes;
