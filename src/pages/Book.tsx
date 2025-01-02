import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/pages/Book.scss'
import { SearchBar } from '../components/SearchBar'
import { useBooks } from '../hooks/useBooks'
import { Table } from '../components/Table'
import { ITableProps } from '../interfaces/Components'
import { EyeIcon } from '../assets'

export const Book: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const [books] = useBooks()

  const tableProps: ITableProps = {
    data: books,
    columns: [
      { header: 'Title', accessor: 'title' },
      { header: 'Author', accessor: 'authors' },
      { header: 'Rating', accessor: 'ratings_1' },
      {
        header: 'Actions',
        render: (book) => (
          <button onClick={() => navigate(`/book/${book.id}`)}>
            <EyeIcon />
          </button>
        )
      }
    ]
  }
  return (
    <div className="books-container">
      <SearchBar />

      <Table {...tableProps} />
    </div>
  )
}
