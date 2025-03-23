import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <Router>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo-list" element={<ToDoList />} />
      </Routes>
    </Router>
  );
};

export default App;