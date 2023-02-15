import "./App.css";
import { News } from "./components/news";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/**<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
      <div style={{ width: "100%" }}>
        <News />
      </div>
    </div>
  );
}

export default App;
