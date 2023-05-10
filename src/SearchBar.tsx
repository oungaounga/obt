/** @format */
import SearchInput from './SearchInput'

export default function SearchBar(props) {
  return (
    <div className="flex gap-3">
      <SearchInput placeholder="From ?" />
      <SearchInput placeholder="To ?" />
    </div>
  )
}
