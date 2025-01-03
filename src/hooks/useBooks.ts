import { useCallback, useEffect, useState } from 'react'
import { fetchBooksBySearch, fetchData } from '../services/api'
import { IBook } from '../interfaces/Books'

export const useBooks = (searchText: string = ''): [IBook[]] => {
  const [books, setBooks] = useState<IBook[]>([])

  const getBooks = useCallback(async () => {
    try {
      const booksData = searchText
        ? await fetchBooksBySearch(searchText)
        : await fetchData()
      setBooks(booksData)
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }, [searchText])

  useEffect(() => {
    getBooks()
  }, [searchText, getBooks])

  return [books]
}
