import "./App.css";

// importing single component aka default import
import Component from "./Components/Component";

// importing multiple components aka named import
import { ComponentA, ComponentB } from "./Components/Component";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>Learn react</div>
        <Component />
        <ComponentA />
        <ComponentB />
      </header>
    </div>
  );
}

export default App;
