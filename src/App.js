import Baners from "./Components/Baners";
import CartBuyProduct from "./Components/CartBuyProduct";
import ClassicSlider from "./Components/ClassicSlider";
import HeroSlider from "./Components/HeroSlider";
import ProductCategorys from "./Components/ProductCategorys";
import ProductsCollection from "./Components/ProductsCollection";
import TopProductColumn from "./Components/TopProductColumn";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

function App() {
   return (
      <>
         <Header />

         <HeroSlider />

         <Baners />

         <ProductsCollection />

         {/* Слайдер категорій продуктів, поки не роблю нема куди виводити, 
         піде в 2/3 спрінт */}
         {/* <ProductCategorys /> */}

         <TopProductColumn />

         {/* Зарез треба додати слайдер */}
         {/* <ClassicSlider /> */}

         <div id="qvmodal"></div>

         <Footer></Footer>

         {/* Картка купити, коли тикаєш на купити */}
         <CartBuyProduct />

         <div className="tap-to-top">
            <a href="#home">
               <i className="fas fa-chevron-up"></i>
            </a>
         </div>

         <div className="bg-overlay"></div>
      </>
   );
}

export default App;
