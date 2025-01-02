import React, { useState } from 'react'
import '../styles/components/SearchBar.scss'
import { SearchIcon } from '../assets'

export const SearchBar: React.FunctionComponent = () => {
  const [search, setSearch] = useState<string>('')

  const handleSearch = () => {
    // Simulate search
    // alert(`Searching for: ${search}`)
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box_input"
      />
      <button className="search-box_btn" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  )
}
