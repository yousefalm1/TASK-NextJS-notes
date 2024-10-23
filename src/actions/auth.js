'use server'

import { deleteToken, getUser, setToken } from "@/lib/token";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { baseUrl, getHeaders } from "./config"

export async function login(formData) {
  const userData = Object.fromEntries(formData);

  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: await getHeaders(),
    body: JSON.stringify(userData)
  })

  const { token } = await response.json()
  await setToken(token)

  redirect('/notes')
}

export async function register(formData) {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    body: formData
  })

  const { token } = await response.json()
  await setToken(token)

  revalidatePath('/users')
  redirect('/notes')
}

export async function logout() {
  await deleteToken()
  redirect('/')
}

export async function getAllUsers() {
  const response = await fetch(`${baseUrl}/auth/users`)
  const users = response.json()
  return users
}