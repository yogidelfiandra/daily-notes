import NoteItem from './NoteItem';

function NoteArchive({ notes, query, onDelete, onArchive }) {
  return (
    <div className='note-archive'>
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
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
    </div>
  );
}

export default NoteArchive;
