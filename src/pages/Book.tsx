import React, { useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { useBooks } from '../hooks/useBooks'
import { Table } from '../components/Table'
import { Modal } from '../components/Modal'
import { ITableProps } from '../interfaces/Components'
import { IBook } from '../interfaces/Books'
import { EyeIcon } from '../assets'
import '../styles/pages/Book.scss'

export const Book: React.FunctionComponent = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [books] = useBooks(searchText)
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null)

  const handleBookClick = (book: IBook) => {
    setSelectedBook(book)
  }

  const handleCloseModal = () => {
    setSelectedBook(null)
  }

  const handleSearch = (searchText: string) => {
    setSearchText(searchText)
  }

  const tableProps: ITableProps = {
    data: books,
    columns: [
      { header: 'Title', accessor: 'title' },
      { header: 'Authors', accessor: 'authors' },
      { header: 'Average Rating', accessor: 'average_rating' },
      { header: 'Rating 1', accessor: 'ratings_1' },
      { header: 'Rating 2', accessor: 'ratings_2' },
      { header: 'Rating 3', accessor: 'ratings_3' },
      { header: 'Rating 4', accessor: 'ratings_4' },
      { header: 'Rating 5', accessor: 'ratings_5' },
      {
        header: 'Actions',
        render: (book) => (
          <button onClick={() => handleBookClick(book)}>
            <EyeIcon />
          </button>
        )
      }
    ],
    handleBookClik: (book) => handleBookClick(book)
  }
  return (
    <div className="books-container">
      <SearchBar onSearch={handleSearch} />

      <Table {...tableProps} />

      <Modal isOpen={!!selectedBook} onClose={handleCloseModal}>
        {selectedBook && (
          <>
            <div className="left-section">
              <img src={selectedBook.image_url} alt={selectedBook.title} />
            </div>
            <div className="right-section">
              <h2>{selectedBook.title}</h2>
              <p>Original Title: {selectedBook.original_title}</p>
              <p>Authors: {selectedBook.authors}</p>
              <p>Published: {selectedBook.original_publication_year}</p>
              <p>ISBN: {selectedBook.isbn}</p>
              <p>Language: {selectedBook.language_code}</p>
              <p>Average Rating: {selectedBook.average_rating}</p>
              <p>Ratings Count: {selectedBook.ratings_count}</p>
            </div>
          </>
        )}
      </Modal>
    </div>
  )
}
