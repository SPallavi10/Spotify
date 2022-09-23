import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Screens/Home";
import Search from "./Components/Screens/Search";
import Library from "./Components/Screens/Library";
import Redirect from "./Components/Redirect";

function App() {
  return (
    <div className="container">
      
    <BrowserRouter>
      <Sidebar/>
      <div className="main">
      <Routes>
      
        <Route path="/"  element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Redirect" element={<Redirect />} />
      </Routes>
      </div>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
