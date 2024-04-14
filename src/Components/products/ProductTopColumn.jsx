import React from "react";
import ProductGorizontalPrev from "./ProductGorizontalPrev";
import { selectorProducts } from "../../redux/slices/ProductSlice";
import { useSelector } from "react-redux";

const ProductTopColumn = (props) => {
   const productsSelector = useSelector(selectorProducts);
   const products = productsSelector.products;
   return (
      <div className="col-lg-4">
         <div className="title-3 pb-4 title-border">
            <h2>{props.title}</h2>
            <h5 className="theme-color">{props.subTitle}</h5>
         </div>

         <div className="product-slider round-arrow">
            <div>
               <div className="row g-3">
                  {products
                     .filter(
                        (product) => product.categories === props.categories
                     )
                     .map((product) => (
                        <ProductGorizontalPrev
                           name={product.name}
                           category={product.categories}
                           price={product.price}
                           imageUrl={product.imageUrl}
                           id={product.id}
                        />
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductTopColumn;
