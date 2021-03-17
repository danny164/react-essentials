import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s house</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>The Night Owl</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Tin" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
