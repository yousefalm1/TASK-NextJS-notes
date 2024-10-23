import { getToken } from "@/lib/token";

const baseUrl = "https://task-react-auth-backend.eapi.joincoded.com/api";

async function getHeaders() {
  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append('Authorization', `Bearer ${await getToken()}`)

  return headers
}


export { getHeaders, baseUrl }