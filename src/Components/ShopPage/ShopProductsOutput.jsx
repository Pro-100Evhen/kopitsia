import React, { useEffect } from "react";
import {
   fetchProducts,
   selectorProducts,
} from "../../redux/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductsPrev from "../products/ProductsPrev";
import Sceleton from "../products/Sceleton";
import ShopOutputOption from "./ShopOutputOption";
import { setCurrentPage } from "../../redux/slices/ShopFilters";

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

   const productsPerRow = useSelector(
      (state) => state.shopFilters.productsPerRow
   );

   const productsWrapperClasses = `row g-sm-4 g-3 row-cols-lg-${productsPerRow} row-cols-md-3 row-cols-2 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section`;
   const { currentPage, productsPerPage } = useSelector(
      (state) => state.shopFilters
   );

   const sortingType = useSelector((state) => state.shopFilters.shopSorting);

   const sortingStrategies = {
      default: (products) => [...products],
      cheaper: (products) => [...products].sort((a, b) => a.price - b.price),
      expensive: (products) => [...products].sort((a, b) => b.price - a.price),
   };

   const sortedProducts = sortingStrategies[sortingType]
      ? sortingStrategies[sortingType](products)
      : [...products];

   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProductsToOutPut = sortedProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
   );

   const totalPages = Math.ceil(products.length / productsPerPage);
   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

   const chagePage = (page) => {
      dispatch(setCurrentPage(page));
   };

   const { categories, sizes } = useSelector((state) => ({
      categories: state.shopFilters.filters.categories,
      sizes: state.shopFilters.filters.sizes,
   }));

   const currentProductsToOutPutFiltered = products.filter((product) => {
      const matchesCategory =
         categories.length === 0 || categories.includes(product.categories);

      const matchesSize =
         sizes.length === 0 ||
         sizes.some((size) => product.sizes.includes(size));

      return matchesCategory && matchesSize;
   });

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
         <div className={productsWrapperClasses}>
            {isLoading
               ? skeletons
               : currentProductsToOutPutFiltered.map((product) => (
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
               <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
               >
                  <a
                     className="page-link"
                     href="javascript:void(0)"
                     aria-label="Previous"
                     onClick={() => chagePage(currentPage - 1)}
                  >
                     <span aria-hidden="true">
                        <i className="fas fa-chevron-left" />
                     </span>
                  </a>
               </li>

               {pages.map((page) => (
                  <li
                     key={page}
                     className={`page-item ${
                        currentPage === page ? "active" : ""
                     }`}
                  >
                     <a
                        className="page-link"
                        href="javascript:void(0)"
                        onClick={() => chagePage(page)}
                     >
                        {page}
                     </a>
                  </li>
               ))}

               <li
                  className={`page-item ${
                     currentPage === totalPages ? "disabled" : ""
                  }`}
               >
                  <a
                     href="javascript:void(0)"
                     className="page-link"
                     aria-label="Next"
                     onClick={() => chagePage(currentPage + 1)}
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
