import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsPerRow } from "../../redux/slices/ShopFilters";
import {
   setProductsPerPage,
   setSortingOrder,
} from "../../redux/slices/ShopFilters";

const ShopOutputOption = () => {
   const [activeValue, setActiveValue] = useState(4);
   const dispatch = useDispatch();

   const setPerRowValue = (valuePerRow, event) => {
      dispatch(setProductsPerRow(valuePerRow));
      setActiveValue(valuePerRow);
   };

   const productsPerRowValue = useSelector(
      (state) => state.shopFilters.productsPerPage
   );

   const gridOptions = [
      { value: 2, img: "grid-2.svg", className: "two-grid" },
      {
         value: 3,
         img: "grid-3.svg",
         className: "three-grid d-md-inline-block d-none",
      },
      {
         value: 4,
         img: "grid.svg",
         className: "grid-btn d-lg-inline-block d-none",
      },
      { value: 1, img: "list.svg", className: "list-btn" },
   ];

   const changeProductsPerPageHeandler = (event) => {
      dispatch(setProductsPerPage(event.target.value));
   };

   const changeSortingType = (event) => {
      dispatch(setSortingOrder(event.target.value));
   };
   const sortingType = useSelector((state) => state.shopFilters.shopSorting);

   const posibleGrigSizes = [12, 24, 52, 100];
   const sortingOption = [
      { text: "Default", value: "default" },
      { text: "Price, Low To High", value: "cheaper" },
      { text: "Price, High To Low", value: "expensive" },
   ];

   return (
      <div className="col-12 no-margin">
         <div className="filter-options">
            <div className="select-options">
               <div className="page-view-filter">
                  <div className="dropdown select-featured">
                     <select
                        className="form-select"
                        name="orderby"
                        id="orderby"
                        onChange={(event) => changeSortingType(event)}
                        value={sortingType}
                     >
                        {sortingOption.map((option) => (
                           <option key={option.value} value={option.value}>
                              {option.text}
                           </option>
                        ))}
                     </select>
                  </div>
               </div>
               <div className="dropdown select-featured">
                  <select
                     className="form-select"
                     name="size"
                     id="pagesize"
                     onChange={(event) => changeProductsPerPageHeandler(event)}
                     value={productsPerRowValue}
                  >
                     {posibleGrigSizes.map((size) => (
                        <option key={size} value={size}>
                           {size} Products Per Page
                        </option>
                     ))}
                  </select>
               </div>
               <div className="grid-options d-sm-inline-block d-none">
                  <ul className="d-flex">
                     {gridOptions.map((option) => (
                        <li
                           key={option.value}
                           className={`${option.className} ${
                              activeValue === option.value ? "active" : ""
                           }`}
                        >
                           <a
                              href="#"
                              onClick={() => setPerRowValue(option.value)}
                           >
                              <img
                                 src={`assets/svg/${option.img}`}
                                 className="img-fluid blur-up lazyload"
                                 alt={`Grid ${option.value}`}
                              />
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShopOutputOption;
