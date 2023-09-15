import "./App.css";
import Hero from "./components/hero";
import NavigationBar from "./components/navigationBar";
import Partner from "./components/partners";
import PopularCourses from "./components/popularCourses";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Partner />
      {/* <PopularCourses /> */}
    </div>
  );
}

export default App;
