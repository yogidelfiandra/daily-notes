import { VscTrash } from 'react-icons/vsc';

function DeleteButton({ id, onDelete }) {
  return (
    <button className='note-item__delete' onClick={() => onDelete(id)}>
      <VscTrash style={{ marginRight: 5 }} />
      Delete
    </button>
  );
}

export default DeleteButton;
