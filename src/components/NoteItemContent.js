function NoteItemContent({ title, body }) {
  return (
    <div className='note-item__content'>
      <h4 className='note-item__title'>{title}</h4>
      <p className='note-item__body'>{body}</p>
    </div>
  );
}

export default NoteItemContent;
