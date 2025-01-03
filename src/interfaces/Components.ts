import { IBook } from './Books'

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IColumn {
  header: string
  accessor?: string
  render?: (row: any) => React.ReactNode
}

export interface ITableProps {
  data: any[]
  columns: IColumn[]
  pageSize?: number
  handleBookClik: (book: IBook) => void
}

export interface IModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export interface ISearchBarProps {
  onSearch: (searchText: string) => void
}
