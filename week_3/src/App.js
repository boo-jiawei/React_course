import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <Router>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo-list" element={<ToDoList />} />
      </Routes>
    </Router>
  );
};

export default App;