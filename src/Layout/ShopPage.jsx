import React from "react";
import ProductsCollection from "../Components/ProductsCollection";
import Breadcrumbs from "../Components/Breadcrumbs";

const ShopPage = () => {
   return (
      <div>
         <Breadcrumbs title="Категорії товарів" />
         <ProductsCollection title="Наші товари" subTitle="Широкий вибір" />
      </div>
   );
};

export default ShopPage;
