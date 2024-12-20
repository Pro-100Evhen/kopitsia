import React, { useEffect } from "react";
import {
   fetchProducts,
   selectorProducts,
} from "../../redux/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductsPrev from "../products/ProductsPrev";
import Sceleton from "../products/Sceleton";
import ShopOutputOption from "./ShopOutputOption";

const ShopProductsOutput = (props) => {
   const productsSelector = useSelector(selectorProducts);
   const products = productsSelector.products;

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts());
   }, [dispatch]);

   const isLoading = useSelector((state) => state.products.isLoading);
   const skeletons = [];
   for (let index = 0; index < 24; index++) {
      skeletons.push(<Sceleton key={index} />);
   }
   return (
      <div className="category-product col-lg-9 col-12 ratio_30">
         <div className="row g-4">
            {/* label and featured section */}
            <div className="col-md-12">
               <ul className="short-name"></ul>
            </div>

            <ShopOutputOption />
         </div>
         {/* label and featured section */}
         {/* Prodcut setion */}
         <div className="row g-sm-4 g-3 row-cols-lg-4 row-cols-md-3 row-cols-2 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
            {isLoading
               ? skeletons
               : products.map((product) => (
                    <ProductsPrev
                       key={product.id}
                       name={product.name}
                       price={product.price}
                       categories={product.categories}
                       imageUrl={product.imageUrl}
                       id={product.id}
                       // В наступних спрінтах додати вниз товару обмежений опис
                    />
                 ))}
         </div>
         <nav className="page-section">
            <ul className="pagination">
               <li className="page-item">
                  <a
                     className="page-link"
                     href="javascript:void(0)"
                     aria-label="Previous"
                     style={{ color: "#6c757d" }}
                  >
                     <span aria-hidden="true">
                        <i className="fas fa-chevron-left" />
                     </span>
                  </a>
               </li>
               <li className="page-item active">
                  <a className="page-link" href="javascript:void(0)">
                     1
                  </a>
               </li>
               <li className="page-item">
                  <a className="page-link" href="shop-1.html?page=2">
                     2
                  </a>
               </li>
               <li className="page-item">
                  <a
                     href="shop-1.html?page=2"
                     className="page-link"
                     aria-label="Next"
                  >
                     <span aria-hidden="true">
                        <i className="fas fa-chevron-right" />
                     </span>
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default ShopProductsOutput;
