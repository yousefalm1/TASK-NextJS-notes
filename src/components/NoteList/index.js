import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  const noteList = notes.map((note) => <NoteItem key={note._id} {...note} />);

  return (
    <div className="flex flex-wrap gap-3 ">
      {noteList}
    </div>
  )
}

export default NoteList