/* eslint-disable no-restricted-globals */
import React from 'react';
import { getData } from '../utils';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
      query: '',
    };

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
    this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this);
    this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  onDeleteNoteEventHandler(id) {
    const deleteNote = confirm('Are you sure you want to delete this note?');

    if (deleteNote) {
      const notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes });
      alert('Note has been deleted.');
    } else {
      alert('Alright, just stay here okay');
    }
  }

  onArchiveNoteEventHandler(id) {
    const { notes } = this.state;
    const noteIndex = notes.findIndex((note) => note.id === id);
    notes[noteIndex].archived = !notes[noteIndex].archived;
    return this.setState({ notes });
  }

  onSearchNoteEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        query: event.target.value,
      };
    });
  }

  render() {
    return (
      <>
        <NoteHeader
          onSearch={this.onSearchNoteEventHandler}
          query={this.state.query}
        />
        <div className='note-app'>
          <NoteInput addNote={this.onAddNoteEventHandler} />
          <h2 className='subtitle subtitle-h3'>My Notes</h2>

          {this.state.notes.filter((note) => note.archived === false).length ===
          0 ? (
            <p className='note-item__empty-message'>No notes yet</p>
          ) : (
            <NoteList
              notes={this.state.notes.filter((note) => note.archived === false)}
              onDelete={this.onDeleteNoteEventHandler}
              onArchive={this.onArchiveNoteEventHandler}
              query={this.state.query}
            />
          )}

          <h2 className='subtitle subtitle-h3'>Archived</h2>
          {this.state.notes.filter((note) => note.archived === true).length ===
          0 ? (
            <p className='note-item__empty-message'>No notes yet</p>
          ) : (
            <NoteList
              notes={this.state.notes.filter((note) => note.archived === true)}
              onArchive={this.onArchiveNoteEventHandler}
              onDelete={this.onDeleteNoteEventHandler}
              query={this.state.query}
            />
          )}
        </div>
      </>
    );
  }
}

export default NoteApp;
