import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
// import Photo from "./components/Photo";
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        
          <Route path="/" ><Home/></Route>
          <Route path="/about" ><About/></Route>
          <Route path="/contact" ><Contact/></Route>
          {/* <Route path="*" ><Photo/></Route> */}
        
      </Router>
    </div>
  );
}

export default App;
