import NoteItem from './NoteItem';

function NoteList({ notes, query, onDelete, onArchive }) {
  return (
    <div className='note-list'>
      {notes
        .filter((note) => {
          if (query) {
            return note.title.toLowerCase().includes(query.toLowerCase());
          }
          return true;
        })
        .map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            archived={note.archived}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
    </div>
  );
}

export default NoteList;
