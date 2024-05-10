import axios from 'axios'

const BASE_API_URL = `${process.env.NEXT_PUBLIC_URL}:${process.env.NEXT_PUBLIC_PORT}${process.env.NEXT_PUBLIC_API_VERSION}`

export const DEFAULT_REQ_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

export const api = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  headers: DEFAULT_REQ_HEADERS
})
