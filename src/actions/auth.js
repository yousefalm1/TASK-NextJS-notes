'use server'

import { baseUrl } from "./config"

export async function login(formData) {
  console.log(formData)
}

export async function register(formData) {
  console.log(formData)
}

export async function getAllUsers() {
  const response = await fetch(`${baseUrl}/auth/users`)
  const users = response.json()
  return users
}