import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NavBar from "./components/NavBar/NavBar"
import Services from "./pages/Services/Services";

export default function App() {
  return (
    <>   

    <NavBar/>
    <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/service" element={<Services/>}/>

      </Routes>

      
    </>

  )
}

/*<Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/about" element={<About/>}/>

        <Route path="/service" element={<Services/>}/>

      </Routes>
*/