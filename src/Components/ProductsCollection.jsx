import React, { useEffect } from "react";
import { fetchProducts, selectorProducts } from "../redux/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductsPrev from "./products/ProductsPrev";
import Sceleton from "./products/Sceleton";

const ProductsCollection = (props) => {
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
      <section className="ratio_asos overflow-hidden">
         <div className="container p-sm-0">
            <div className="row m-0">
               <div className="col-12 p-0">
                  <div className="title-3 text-center">
                     <h5 className="theme-color">{props.title}</h5>
                     <h2>{props.subTitle}</h2>
                  </div>
               </div>
            </div>

            <div className="row g-sm-4 g-3">
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
         </div>
      </section>
   );
};

export default ProductsCollection;
