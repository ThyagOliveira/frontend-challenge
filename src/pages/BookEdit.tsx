import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchBookById, updateBook } from '../services/api'
import { IBook } from '../interfaces/Books'
import { BackButtonIcon } from '../assets'
import '../styles/pages/BookEdit.scss'

export const BookEdit: React.FunctionComponent = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState<IBook | null>(null)
  const [formData, setFormData] = useState<IBook | null>(null)

  useEffect(() => {
    if (id) {
      fetchBookById(id).then((response) => {
        setBook(response || null)
        setFormData(response || null)
      })
    }
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSave = async () => {
    if (formData) {
      try {
        await updateBook(formData)
        alert('Book updated successfully!')
        navigate('/admin')
      } catch (error) {
        console.error('Error updating book:', error)
        alert('Failed to update book!')
      }
    }
  }

  if (!book) {
    return <div>Loading...</div>
  }

  return (
    <div className="book-edit">
      <button className="book-edit_back-btn" onClick={() => navigate(-1)}>
        <BackButtonIcon />
      </button>
      <div className="book-edit_form">
        <div className="book-edit_form--group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData?.title || ''}
            onChange={handleChange}
          />
        </div>
        <div className="book-edit_form--group">
          <label htmlFor="authors">Author(s):</label>
          <input
            type="text"
            id="authors"
            name="authors"
            value={formData?.authors || ''}
            onChange={handleChange}
          />
        </div>
        <div className="book-edit_form--group">
          <label htmlFor="average_rating">Average Rating:</label>
          <input
            type="number"
            id="average_rating"
            name="average_rating"
            value={formData?.average_rating || ''}
            onChange={handleChange}
          />
        </div>
        <div className="book-edit_form--group">
          <label htmlFor="ratings_count">Ratings Count:</label>
          <input
            type="number"
            id="ratings_count"
            name="ratings_count"
            value={formData?.ratings_count || ''}
            onChange={handleChange}
          />
        </div>
        <div className="book-edit_form--group">
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={formData?.isbn || ''}
            onChange={handleChange}
          />
        </div>
        <div className="book-edit_form--group">
          <label htmlFor="language_code">Language:</label>
          <input
            type="text"
            id="language_code"
            name="language_code"
            value={formData?.language_code || ''}
            onChange={handleChange}
          />
        </div>
        <div className="book-edit_form--group">
          <label htmlFor="original_publication_year">
            Original Publication Year:
          </label>
          <input
            type="number"
            id="original_publication_year"
            name="original_publication_year"
            value={formData?.original_publication_year || ''}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="book-edit_save-btn" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  )
}
