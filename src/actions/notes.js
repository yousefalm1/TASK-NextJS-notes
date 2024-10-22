'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const baseUrl = "https://task-react-auth-backend.eapi.joincoded.com/api";
const headers = new Headers()
headers.append("Content-Type", "application/json")

export async function fetchNotes() {
  const response = await fetch(`${baseUrl}/notes`);
  const notes = await response.json()
  return notes
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