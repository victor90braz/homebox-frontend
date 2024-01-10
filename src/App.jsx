import "./App.css";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header>
        <Home name="HomeBox" />
      </header>

      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
