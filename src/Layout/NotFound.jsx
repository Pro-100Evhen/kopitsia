import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
   return (
      <>
         <div className="notFound__conteiner">
            <div className="notFound__info">
               <h3 className="notFound__error">Помилка 404 </h3>
               <h1 className="notFound__title">Сторінка не знайдена </h1>
               <p className="notFound__text">
                  Неправильно набрана адреса або такої сторінки на сайті більше
                  не існує.
               </p>
               <Link className="notFound__link" to="/">
                  На головну
               </Link>
            </div>
         </div>
      </>
   );
};

export default NotFound;
