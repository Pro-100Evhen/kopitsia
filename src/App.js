import { BrowserRouter, Routes, Route } from "react-router-dom";
import Baners from "./Components/Baners";
import Home from "./Layout/Home";
import About from "./Layout/About";
import Cart from "./Layout/Cart";
import NotFound from "./Layout/NotFound";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
