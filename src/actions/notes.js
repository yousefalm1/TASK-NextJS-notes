'use server'

import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

const baseUrl = "https://task-react-auth-backend.eapi.joincoded.com/api";
const headers = new Headers()
headers.append("Content-Type", "application/json")

export async function fetchNotes() {
  const response = await fetch(`${baseUrl}/notes`);
  const notes = await response.json()
  return notes
}

export async function fetchNoteById(noteId) {
  const response = await fetch(`${baseUrl}/notes/${noteId}`);

  if (!response.ok) notFound()

  const note = await response.json()
  return note
}

export async function createNote(formData) {
  const note = Object.fromEntries(formData)

  const response = await fetch(`${baseUrl}/notes`, {
    method: "POST",
    headers,
    body: JSON.stringify(note)
  })
  const newNote = await response.json()
}