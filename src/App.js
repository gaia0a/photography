import Navbar from "./Nav";
import Home from "./home";
import About from "./about";
import Categories from "./categories";
import Contact from "./contact";
import { Route, Routes } from "react-router-dom";
import { Images } from "./img";

function App() {
  console.log(Images)
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

    </>
  )
}

export default App;
