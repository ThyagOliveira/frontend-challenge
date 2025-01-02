export interface IColumn {
  header: string
  accessor?: string
  render?: (row: any) => React.ReactNode
}

export interface ITableProps {
  data: any[]
  columns: IColumn[]
  pageSize?: number
}
