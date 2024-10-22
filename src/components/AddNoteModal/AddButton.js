import React from 'react'

function AddButton({ openModal }) {
  return (
    <div className="mb-5">
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Note
      </button>
    </div>
  )
}

export default AddButton