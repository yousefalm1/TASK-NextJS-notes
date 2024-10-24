import { getToken } from '@/lib/token';

const baseUrl = 'https://task-react-auth-backend.eapi.joincoded.com/api';

async function getHeaders() {
  const token = await getToken();
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Bearer ${token}`);
  // Add an authorization header

  return headers;
}

export { getHeaders, baseUrl };
