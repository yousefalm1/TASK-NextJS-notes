const baseUrl = "https://task-react-auth-backend.eapi.joincoded.com/api";

async function getHeaders() {
  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  // Add an authorization header

  return headers
}


export { getHeaders, baseUrl }