import React from "react";
import ProductTopColumn from "./products/ProductTopColumn";

const TopProductColumn = () => {
   return (
      <section className="product-slider overflow-hidden">
         <div>
            <div className="container">
               <div className="row g-3">
                  <ProductTopColumn
                     title={"Плюшеві ведмедики"}
                     subTitle={"Найкращий друг для вашої дитини"}
                     categories={"плюшеві ведмеді"}
                  />
                  <ProductTopColumn
                     title={"Сувеніри"}
                     subTitle={"Найкращий річ на пам'ять"}
                     categories={"сувенір"}
                  />
                  <ProductTopColumn
                     title={"М'які іграшки"}
                     subTitle={"Те що треба для обіймів"}
                     categories={"М'які іграшки"}
                  />
                  <ProductTopColumn
                     title={"Крісла подушки"}
                     subTitle={"Не банально поседіти вдома"}
                     categories={"крісла_подушки"}
                  />
                  <ProductTopColumn
                     title={"Все буде Україна"}
                     subTitle={"Патріотична лінійка"}
                     categories={"все_буде_україна"}
                  />
                  <ProductTopColumn
                     title={"Подушки"}
                     subTitle={"Оригінальний підхід до сну"}
                     categories={"Подушки"}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default TopProductColumn;
