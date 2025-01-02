import { useEffect, useState } from 'react'
import { fetchData } from '../services/api'
import { IBook } from '../interfaces/Books'

export const useBooks = () => {
  const [books, setBooks] = useState<IBook[]>([])

  useEffect(() => {
    fetchData().then(setBooks)
  }, [])

  return [books]
}
