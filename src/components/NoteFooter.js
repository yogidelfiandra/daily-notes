function NoteFooter() {
  return (
    <footer className='footer'>
      <p>
        &copy; {new Date().getFullYear()} Design by{' '}
        <a
          href='https://www.instagram.com/yogidelfiandra/'
          target='_blank'
          rel='noopener noreferrer'
        >
          yogidelfiandra
        </a>
      </p>
    </footer>
  );
}

export default NoteFooter;
