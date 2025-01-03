import React, { useState } from 'react'
import { SearchIcon } from '../assets'
import { ISearchBarProps } from '../interfaces/Components'
import '../styles/components/SearchBar.scss'

export const SearchBar: React.FunctionComponent<ISearchBarProps> = ({
  onSearch
}) => {
  const [search, setSearch] = useState<string>('')

  const handleSearch = () => {
    if (!search.trim()) {
      onSearch('')
    } else {
      onSearch(search)
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleKeyUp}
        className="search-box_input"
      />
      <button className="search-box_btn" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  )
}
