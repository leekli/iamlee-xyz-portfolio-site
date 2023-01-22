import "./App.css";

function App() {
  return (
    <main className="App">
      <h1>iamlee.xyz</h1>
      <a
        href="https://www.linkedin.com/in/leekirkham/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="assets/linkedin.png"
          alt="This goes to my LinkedIn page"
          width="25"
        />
      </a>
      &nbsp;
      <a href="https://twitter.com/likirkham" target="_blank" rel="noreferrer">
        <img
          src="assets/twitter.png"
          alt="This goes to my Twitter page"
          width="25"
        />
      </a>
      &nbsp;
      <a
        href="https://www.reddit.com/user/lee_xyz"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="assets/reddit.jpeg"
          alt="This goes to my Reddit page"
          width="25"
        />
      </a>
    </main>
  );
}

export default App;
