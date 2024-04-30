import React from "react";
import ProductGorizontalPrev from "./ProductGorizontalPrev";
import { selectorProducts } from "../../redux/slices/ProductSlice";
import { useSelector } from "react-redux";
import GorSceleton from "./GorSceleton";

const ProductTopColumn = (props) => {
   const productsSelector = useSelector(selectorProducts);
   const products = productsSelector.products;

   const isLoading = useSelector((state) => state.products.isLoading);
   const prevList = [];
   for (let i = 30; i < 54; i++) {
      prevList.push(<GorSceleton key={i} />);
   }

   return (
      <div className="col-lg-4">
         <div className="title-3 pb-4 title-border">
            <h2>{props.title}</h2>
            <h5 className="theme-color">{props.subTitle}</h5>
         </div>

         <div className="product-slider round-arrow">
            <div>
               <div className="row g-3">
                  {isLoading
                     ? prevList
                     : products
                          .filter(
                             (product) =>
                                product.categories === props.categories
                          )
                          .map((product) => (
                             <ProductGorizontalPrev
                                name={product.name}
                                category={product.categories}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                id={product.id}
                                key={product.id}
                             />
                          ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductTopColumn;
