"use client"

import { useState } from "react";

import AddButton from "./AddButton";
import CreateNoteForm from "./CreateNoteForm";

// import { createNote } from "../api/notes";

function AddNoteModal() {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);



  if (!show) return <AddButton openModal={openModal} />


  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10">
      <div className="bg-gray-800 rounded-md shadow-md w-full max-w-md p-6 overflow-scroll max-h-[70%]">
        <CreateNoteForm closeModal={closeModal} />
      </div>
    </div>
  );
};

export default AddNoteModal;
