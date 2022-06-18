/* eslint-disable no-restricted-globals */
import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxText: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const max = 50;
    const titleInputUser = event.target.value.slice(0, max);
    const titleInputUserLength = titleInputUser.length;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: titleInputUser,
        maxText: max - titleInputUserLength,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const postNote = confirm('Are you sure you want to add this note?');

    if (postNote) {
      this.props.addNote(this.state);
      const message = 'Note has been added.';
      alert(message);
    } else {
      alert('Alright, just stay here okay');
    }
  }

  render() {
    return (
      <div className='note-input'>
        <h2 className='subtitle'>Create Note</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <span className='note-input__character'>
            remaining characters: {this.state.maxText}
          </span>
          <input
            type='text'
            placeholder='Enter title...'
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            cols='30'
            rows='10'
            placeholder='Type to add a note...'
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button type='submit'>Add Note</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
