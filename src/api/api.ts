import axios, { AxiosError } from 'axios'

const defaultHeaders = {
  'Content-Type': 'application/json',
}

const baseURL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
  baseURL,
  headers: defaultHeaders,
})

export const formatUrl = (url: string, params?: string[]): string => {
  if (!params) return url
  const matchParams = /{(\d+)}/g
  const replacer = (match: string, index: number): string => params[index] ?? match

  return url.replace(matchParams, replacer)
}

export async function getData<T>(url: string, params?: string[], headers?: unknown): Promise<T> {
  try {
    const response = await instance.get<T>(formatUrl(url, params), { headers })
    return response.data
  } catch (error) {
    const err = error as AxiosError
    throw err.response?.data
  }
}

export async function postData<T>(url: string, data: unknown, headers?: unknown): Promise<T> {
  try {
    const response = await instance.post<T>(url, data, { headers })
    return response.data
  } catch (error) {
    const err = error as AxiosError
    throw err.response?.data
  }
}

export async function putData<T>(url: string, data: unknown, headers?: unknown): Promise<T> {
  try {
    const response = await instance.put<T>(url, data, { headers })
    return response.data
  } catch (error) {
    const err = error as AxiosError
    throw err.response?.data
  }
}
