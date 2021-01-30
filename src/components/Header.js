const Header = (props) => {
  return (
    <header>
      <h1>CV App</h1>
      <button type="button" onClick={props.loadSampleData}>Fill Sample Content</button>
    </header>
  );
}

export default Header;