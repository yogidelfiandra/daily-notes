import NoteItemContent from './NoteItemContent';
import NoteItemFooter from './NoteItemFooter';

function NoteItem({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <article className='note-item'>
      <NoteItemContent title={title} body={body} />
      <NoteItemFooter
        createdAt={createdAt}
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </article>
  );
}

export default NoteItem;
