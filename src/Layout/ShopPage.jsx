import React, { useEffect } from "react";
import ProductsCollection from "../Components/ProductsCollection";
import Breadcrumbs from "../Components/Breadcrumbs";
import { fetchProducts, selectorProducts } from "../redux/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductsPrev from "../Components/products/ProductsPrev";
import Sceleton from "../Components/products/Sceleton";
import ShopPageContent from "../Components/ShopPage/ShopPageContent";

const ShopPage = (props) => {
   return (
      <div>
         <Breadcrumbs title="Наші товари" />
         {/* <ProductsCollection title="Наші товари" subTitle="Широкий вибір" /> */}
         <ShopPageContent props={props} />
      </div>
   );
};

export default ShopPage;
