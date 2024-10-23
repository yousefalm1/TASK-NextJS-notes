'use server'

import { baseUrl, headers } from "./config"

export async function login(formData) {
  const userData = Object.fromEntries(formData);

  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers,
    body: JSON.stringify(userData)
  })

  const { token } = await response.json()
}

export async function register(formData) {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    body: formData
  })

  const { token } = await response.json()
}

export async function getAllUsers() {
  const response = await fetch(`${baseUrl}/auth/users`)
  const users = response.json()
  return users
}