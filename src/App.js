import { BrowserRouter, Routes, Route } from "react-router-dom";
import Baners from "./Components/Baners";
import Home from "./Layout/Home";
import About from "./Layout/About";
import Cart from "./Layout/Cart";
import NotFound from "./Layout/NotFound";
import MainHFTemplate from "./Layout/MainHFTemplate";
import Wishlist from "./Layout/WishList";
import CheckOut from "./Layout/CheckOut";
import ThankYou from "./Layout/ThankYou";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainHFTemplate />}>
               <Route index element={<Home />} />
               <Route path="about" element={<About />} />
               <Route path="cart" element={<Cart />} />
               <Route path="wishlist" element={<Wishlist />} />
               <Route path="checkout" element={<CheckOut />} />
               <Route path="thankyou" element={<ThankYou />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
