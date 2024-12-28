import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorProducts } from "../../redux/slices/ProductSlice";
import {
   addCategorie,
   addSize,
   clearAllFielters,
   remoweCategorie,
   remoweSize,
} from "../../redux/slices/ShopFilters";

const ShopSidebarFilters = () => {
   const productsSelector = useSelector(selectorProducts);
   const products = productsSelector.products;
   const dispatch = useDispatch();

   const categoriesList = Object.values(
      products.reduce((acc, product) => {
         if (!acc[product.categories]) {
            acc[product.categories] = { name: product.categories, count: 0 };
         }
         acc[product.categories].count += 1;
         return acc;
      }, {})
   );

   const sizesList = Object.values(
      products.reduce((acc, product) => {
         product.sizes.forEach((size) => {
            if (!acc[size]) {
               acc[size] = { name: size, count: 0 };
            }
            acc[size].count += 1;
         });
         return acc;
      }, {})
   );

   const addFilterCategory = (event) => {
      const isCheched = event.target.checked;
      isCheched
         ? dispatch(addCategorie(event.target.value))
         : dispatch(remoweCategorie(event.target.value));
   };
   const addFilterSizes = (event) => {
      const isCheched = event.target.checked;
      isCheched
         ? dispatch(addSize(event.target.value))
         : dispatch(remoweSize(event.target.value));
   };

   const { categories, sizes } = useSelector((state) => ({
      categories: state.shopFilters.filters.categories,
      sizes: state.shopFilters.filters.sizes,
   }));

   const clearAllFieltersHeandler = () => {
      dispatch(clearAllFielters());
   };

   return (
      <div className="col-lg-3 category-side col-md-4">
         <div className="category-option">
            <div className="button-close mb-3">
               <button className="btn p-0">
                  <i data-feather="arrow-left" /> Close
               </button>
            </div>
            <div className="accordion category-name" id="accordionExample">
               <div className="accordion-item category-rating">
                  <h2 className="accordion-header" id="headingTwo">
                     <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                     >
                        Категорії
                     </button>
                  </h2>
                  <div
                     id="collapseTwo"
                     className="accordion-collapse collapse show"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body category-scroll">
                        <ul className="category-list">
                           {categoriesList.map((category, index) => (
                              <li key={index}>
                                 <div className="form-check ps-0 custome-form-check">
                                    <input
                                       className="checkbox_animated check-it"
                                       id={`category-${index}`}
                                       name="brands"
                                       defaultValue={1}
                                       checked={categories.includes(
                                          category.name
                                       )}
                                       type="checkbox"
                                       value={category.name}
                                       onChange={(event) =>
                                          addFilterCategory(event)
                                       }
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor={`category-${index}`}
                                    >
                                       {category.name}
                                    </label>
                                    <p className="font-light">
                                       ({category.count})
                                    </p>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="accordion-item category-rating">
                  <h2 className="accordion-header" id="headingTwo">
                     <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                     >
                        Розміри
                     </button>
                  </h2>
                  <div
                     id="collapseTwo"
                     className="accordion-collapse collapse show"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body category-scroll">
                        <ul className="category-list">
                           {sizesList.map((size, index) => (
                              <li key={index}>
                                 <div className="form-check ps-0 custome-form-check">
                                    <input
                                       className="checkbox_animated check-it"
                                       id={`size-${index}`}
                                       name="brands"
                                       defaultValue={1}
                                       type="checkbox"
                                       value={size.name}
                                       checked={sizes.includes(size.name)}
                                       onChange={(event) =>
                                          addFilterSizes(event)
                                       }
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor={`size-${index}`}
                                    >
                                       {size.name}
                                    </label>
                                    <p className="font-light">({size.count})</p>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="accordion-item category-rating">
                  <h2 className="accordion-header" id="headingTwo">
                     <button
                        className="clear-all-filters-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        onClick={() => clearAllFieltersHeandler()}
                     >
                        Очистити всі фільтри
                     </button>
                  </h2>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShopSidebarFilters;
