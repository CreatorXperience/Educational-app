import "./App.css";
import Hero from "./components/hero";
import NavigationBar from "./components/navigationBar";
import Partner from "./components/partners";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Partner />
    </div>
  );
}

export default App;
