import axios, { AxiosError } from 'axios'
import { IBook } from '../interfaces/Books'

const axiosInstance = axios.create({
  baseURL: 'http://0.0.0.0:8000/api/',
  headers: {
    'Content-Type': 'application/json'
  }
})

const getAuthHeaders = () => {
  const userData = localStorage.getItem('isAdmin')
  if (!userData) {
    throw new Error('Authentication failed')
  }
  const parsedUserData = JSON.parse(userData)
  return {
    Authorization:
      'Basic ' + btoa(`${parsedUserData.username}:${parsedUserData.password}`)
  }
}

const handleError = (error: AxiosError) => {
  if (error.response) {
    console.error('Response error:', error.response.data)
  } else if (error.request) {
    console.error('Request error:', error.request)
  } else {
    console.error('General error:', error.message)
  }
  throw error
}

export const login = async (username: string, password: string) => {
  try {
    const response = await axiosInstance.post('login/', {
      username,
      password
    })
    console.log('Login successful:', response.data)
    return response
  } catch (error) {
    handleError(error as AxiosError)
  }
}

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get('books')

    return response.data
  } catch (error) {
    handleError(error as AxiosError)
  }
}

export const fetchBookById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`books/${id}`)

    return response.data
  } catch (error) {
    handleError(error as AxiosError)
  }
}

export const fetchBooksBySearch = async (searchText: string) => {
  try {
    const response = await axiosInstance.get('books/', {
      params: {
        search: searchText
      }
    })
    return response.data
  } catch (error) {
    handleError(error as AxiosError)
  }
}

export const updateBook = async (data: IBook) => {
  try {
    const updatedData = {
      title: data.title,
      authors: data.authors,
      average_rating: data.average_rating,
      ratings_count: data.ratings_count,
      isbn: data.isbn,
      language_code: data.language_code,
      original_publication_year: data.original_publication_year
    }

    const response = await axiosInstance.patch(
      `books/${data.id}/`,
      updatedData,
      {
        headers: getAuthHeaders()
      }
    )
    return response
  } catch (error) {
    handleError(error as AxiosError)
  }
}
