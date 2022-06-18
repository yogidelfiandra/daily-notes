import { VscEllipsis } from 'react-icons/vsc';
import { showFormattedDate } from '../utils';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function NoteItemFooter({ createdAt, id, archived, onDelete, onArchive }) {
  const date = showFormattedDate(createdAt);
  return (
    <div className='note-item__footer'>
      <span className='note-item__date'>{date}</span>
      <div className='note-item__setting'>
        <VscEllipsis />
        <ul className='note-item__setting-menu'>
          <li>
            <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
          </li>
          <li>
            <DeleteButton id={id} onDelete={onDelete} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NoteItemFooter;
