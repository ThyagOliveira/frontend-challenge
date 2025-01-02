import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/pages/BookDetails.scss'
import { fetchData } from '../services/api'
import { IBook } from '../interfaces/Books'
import '../styles/pages/BookDetails.scss'
import { BackButtonIcon } from '../assets'

export const BookDetails: React.FunctionComponent = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState<IBook | null>(null)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await fetchData()
        const selectedBook = data.find(
          (book: { id: number }) => book.id === Number(id)
        )
        setBook(selectedBook || null)
      } catch (error) {
        console.error('Error fetching book details:', error)
      }
    }

    fetchBook()
  }, [id])

  if (!book) {
    return <div>Loading...</div>
  }

  return (
    <div className="book-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <BackButtonIcon />
      </button>
      <div className="book-info">
        <div className="book-image">
          <img src={book.image_url} alt={book.title} />
        </div>
        <div className="book-description">
          <h1>{book.title}</h1>
          <p>
            <strong>Original Title:</strong> {book.original_title}
          </p>
          <p>
            <strong>Author(s):</strong> {book.authors}
          </p>
          <p>
            <strong>Average Rating:</strong> {book.average_rating}
          </p>
          <p>
            <strong>Ratings Count:</strong> {book.ratings_count}
          </p>
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p>
            <strong>Language:</strong> {book.language_code}
          </p>
          <p>
            <strong>Original Publication Year:</strong>{' '}
            {book.original_publication_year}
          </p>
        </div>
      </div>
    </div>
    // <div className="book-details">
    //   <h1>Book Details</h1>
    //   <p>Title: {book.title}</p>
    //   <p>Author: {book.authors}</p>
    //   <p>Rating: {book.ratings_1}</p>
    // </div>
  )
}
