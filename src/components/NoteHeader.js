import { HiSearch } from 'react-icons/hi';

function NoteHeader({ query, onSearch }) {
  return (
    <div className='note-app__header'>
      <h1>Daily Notes</h1>
      <div className='note-search'>
        <HiSearch size={16} />
        <input
          type='text'
          placeholder='type to search...'
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}

export default NoteHeader;
