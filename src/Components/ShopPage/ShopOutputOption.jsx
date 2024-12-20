import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsPerRow } from "../../redux/slices/ShopFilters";
import { setProductsPerPage } from "../../redux/slices/ShopFilters";

const ShopOutputOption = () => {
   const [activeValue, setActiveValue] = useState(4);
   const dispatch = useDispatch();

   const setPerRowValue = (valuePerRow, event) => {
      dispatch(setProductsPerRow(valuePerRow));

      setActiveValue(valuePerRow);
   };

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

   return (
      <div className="col-12">
         <div className="filter-options">
            <div className="select-options">
               <div className="page-view-filter">
                  <div className="dropdown select-featured">
                     <select
                        className="form-select"
                        name="orderby"
                        id="orderby"
                     >
                        <option value={-1} selected>
                           Default
                        </option>
                        <option value={1}>Date, New To Old</option>
                        <option value={2}>Date, Old To New</option>
                        <option value={3}>Price, Low To High</option>
                        <option value={4}>Price, High To Low</option>
                     </select>
                  </div>
               </div>
               <div className="dropdown select-featured">
                  <select
                     className="form-select"
                     name="size"
                     id="pagesize"
                     onChange={(event) => changeProductsPerPageHeandler(event)}
                  >
                     <option value={12} selected>
                        12 Products Per Page
                     </option>
                     <option value={24}>24 Products Per Page</option>
                     <option value={52}>52 Products Per Page</option>
                     <option value={100}>100 Products Per Page</option>
                  </select>
               </div>
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
                           href="javascript:void(0)"
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
   );
};

export default ShopOutputOption;
