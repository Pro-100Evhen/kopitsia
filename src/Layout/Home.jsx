import { BrowserRouter, Routes, Route } from "react-router-dom";
import Baners from "../Components/Baners";
import CartBuyProduct from "../Components/CartBuyProduct";
import ClassicSlider from "../Components/ClassicSlider";
import HeroSlider from "../Components/HeroSlider";
import ProductCategorys from "../Components/ProductCategorys";
import ProductsCollection from "../Components/ProductsCollection";
import TopProductColumn from "../Components/TopProductColumn";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

function Home() {
   return (
      <>
         <HeroSlider />

         {/* Банери категорій продуктів, створяться після підключення redux */}
         {/* <Baners /> */}

         <ProductsCollection title="М'які іграшки" subTitle="Саме для вас" />

         {/* Слайдер категорій продуктів, поки не роблю нема куди виводити, 
         піде в 2/3 спрінт */}
         {/* <ProductCategorys /> */}

         {/* <TopProductColumn /> */}

         {/* Зарез треба додати слайдер */}
         {/* <ClassicSlider /> */}

         <div id="qvmodal"></div>

         {/* Картка купити, коли тикаєш на купити */}
         <CartBuyProduct />

         {/* <div className="tap-to-top">
            <a href="#home">
               <i className="fas fa-chevron-up"></i>
            </a>
         </div> */}

         <div className="bg-overlay"></div>
      </>
   );
}

export default Home;
