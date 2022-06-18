import { VscBookmark } from 'react-icons/vsc';

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button className='note-item__archive' onClick={() => onArchive(id)}>
      <VscBookmark style={{ marginRight: 5 }} />
      {archived === false ? 'Archive' : 'Unarchive'}
    </button>
  );
}

export default ArchiveButton;
