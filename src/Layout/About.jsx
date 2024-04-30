import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "../Components/Breadcrumbs";
import { NavLink } from "react-router-dom";

const About = () => {
   return (
      <>
         <Breadcrumbs title="Про нас" />
         {/* team leader section Start */}
         <section className="overflow-hidden">
            <div className="container">
               <div className="row g-5">
                  <div className="col-xl-5 offset-xl-1">
                     <div className="row g-3">
                        <div className="col-md-6">
                           <img
                              src="assets/images/inner-page/review-image/6.jpg"
                              className="img-fluid rounded-3 about-image"
                              alt
                           />
                        </div>
                        <div className="col-md-6">
                           <img
                              src="assets/images/inner-page/review-image/7.jpg"
                              className="img-fluid rounded-3 about-image"
                              alt
                           />
                        </div>
                        <div className="col-12 ratio_40">
                           <div>
                              <img
                                 src="assets/images/inner-page/review-image/8.jpg"
                                 className="img-fluid rounded-3 team-image bg-img"
                                 alt
                              />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5">
                     <div className="about-details">
                        <div>
                           <h2>ХТО МИ ТАКІ</h2>
                           <h3>Онлайн магазин плюшевих іграшок</h3>
                           <p>
                              Відкрийте для себе світ тепла та затишку у нашому
                              магазині плюшевих іграшок, де кожен виріб
                              створений з любов’ю та дбайливістю. Наша історія
                              почалася коли ми вирішили подарувати дітям та
                              дорослим частинку радості через унікальні плюшеві
                              друзів.
                           </p>
                           <p>
                              У Kopitsia ми віримо, що плюшева іграшка може бути
                              більше ніж просто граю. Вона стає справжнім
                              другом, здатним підтримати у важкі хвилини та
                              подарувати теплі обійми. Кожна іграшка у нашому
                              асортименті — це результат майстерності наших
                              ремісників, які використовують лише найкращі
                              матеріали та дотримуються високих стандартів
                              якості.
                           </p>
                           <NavLink
                              to="/"
                              className="btn btn-solid-default white"
                           >
                              Купити зараз!
                           </NavLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* team leader section End */}
      </>
   );
};

export default About;
