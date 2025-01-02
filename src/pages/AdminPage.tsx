import React from 'react'
import { useNavigate } from 'react-router'
import { useBooks } from '../hooks/useBooks'
import { Table } from '../components/Table'
import { ITableProps } from '../interfaces/Components'
import { EditIcon, EyeIcon } from '../assets'
import '../styles/pages/AdminPage.scss'

export const AdminPage: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const [books] = useBooks()

  const handleEdit = (id: number) => {
    alert(`Edit book with ID: ${id}`)
  }

  const tableProps: ITableProps = {
    data: books,
    columns: [
      { header: 'Title', accessor: 'title' },
      { header: 'Author', accessor: 'authors' },
      { header: 'Rating', accessor: 'ratings_1' },
      {
        header: 'Actions',
        render: (book) => (
          <>
            <button onClick={() => navigate(`/book/${book.id}`)}>
              <EyeIcon />
            </button>
            <button onClick={() => handleEdit(book.id)}>
              <EditIcon />
            </button>
          </>
        )
      }
    ]
  }
  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <Table {...tableProps} />
    </div>
  )
}
