import React from "react";

const ShopSidebarFilters = () => {
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
                        Brand
                     </button>
                  </h2>
                  <div
                     id="collapseTwo"
                     className="accordion-collapse collapse show"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body category-scroll">
                        <ul className="category-list">
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br1"
                                    name="brands"
                                    defaultValue={1}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Quis Et
                                 </label>
                                 <p className="font-light">(1)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br2"
                                    name="brands"
                                    defaultValue={2}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Aliquam Doloremque
                                 </label>
                                 <p className="font-light">(0)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br3"
                                    name="brands"
                                    defaultValue={3}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Sequi Repellendus
                                 </label>
                                 <p className="font-light">(1)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br4"
                                    name="brands"
                                    defaultValue={4}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Repellendus Quia
                                 </label>
                                 <p className="font-light">(2)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br5"
                                    name="brands"
                                    defaultValue={5}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Sint Iste
                                 </label>
                                 <p className="font-light">(0)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br6"
                                    name="brands"
                                    defaultValue={6}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Et Eos
                                 </label>
                                 <p className="font-light">(6)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br7"
                                    name="brands"
                                    defaultValue={7}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Vel Explicabo
                                 </label>
                                 <p className="font-light">(2)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br8"
                                    name="brands"
                                    defaultValue={8}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Ipsam Earum
                                 </label>
                                 <p className="font-light">(4)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br9"
                                    name="brands"
                                    defaultValue={9}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Sequi Reprehenderit
                                 </label>
                                 <p className="font-light">(5)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="br10"
                                    name="brands"
                                    defaultValue={10}
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Sunt Corrupti
                                 </label>
                                 <p className="font-light">(3)</p>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="accordion-item category-color">
                  <h2 className="accordion-header" id="headingThree">
                     <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                     >
                        Color
                     </button>
                  </h2>
                  <div
                     id="collapseThree"
                     className="accordion-collapse collapse show"
                     aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="category-list">
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fas fa-check" />
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fas fa-check" />
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fas fa-check" />
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fas fa-check" />
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fas fa-check" />
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fas fa-check" />
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fas fa-check" />
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fas fa-check" />
                              </a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">
                                 <i className="fas fa-check" />
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="accordion-item category-price">
                  <h2 className="accordion-header" id="headingFour">
                     <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                     >
                        Price
                     </button>
                  </h2>
                  <div
                     id="collapseFour"
                     className="accordion-collapse collapse show"
                     aria-labelledby="headingFour"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <div className="range-slider category-list">
                           <input
                              type="text"
                              className="js-range-slider"
                              id="js-range-price"
                              defaultValue
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="accordion-item category-price">
                  <h2 className="accordion-header" id="headingFive">
                     <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                     >
                        Size
                     </button>
                  </h2>
                  <div
                     id="collapseFive"
                     className="accordion-collapse collapse show"
                     aria-labelledby="headingFive"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="category-list">
                           <li>
                              <a href="javascript:void(0)">xs</a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">sm</a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">md</a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">lg</a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">xl</a>
                           </li>
                           <li>
                              <a href="javascript:void(0)">xxl</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="accordion-item category-rating">
                  <h2 className="accordion-header" id="headingOne">
                     <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                     >
                        Category
                     </button>
                  </h2>
                  <div
                     id="collapseSix"
                     className="accordion-collapse collapse show"
                     aria-labelledby="headingOne"
                  >
                     <div className="accordion-body category-scroll">
                        <ul className="category-list">
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="ct1"
                                    name="categories"
                                    type="checkbox"
                                    defaultValue={1}
                                 />
                                 <label className="form-check-label">
                                    Qui Ut
                                 </label>
                                 <p className="font-light">(7)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="ct2"
                                    name="categories"
                                    type="checkbox"
                                    defaultValue={2}
                                 />
                                 <label className="form-check-label">
                                    Blanditiis Error
                                 </label>
                                 <p className="font-light">(8)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="ct3"
                                    name="categories"
                                    type="checkbox"
                                    defaultValue={3}
                                 />
                                 <label className="form-check-label">
                                    Quam Quos
                                 </label>
                                 <p className="font-light">(0)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="ct4"
                                    name="categories"
                                    type="checkbox"
                                    defaultValue={4}
                                 />
                                 <label className="form-check-label">
                                    Cupiditate Minus
                                 </label>
                                 <p className="font-light">(5)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="ct5"
                                    name="categories"
                                    type="checkbox"
                                    defaultValue={5}
                                 />
                                 <label className="form-check-label">
                                    Dolores Et
                                 </label>
                                 <p className="font-light">(4)</p>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    id="ct6"
                                    name="categories"
                                    type="checkbox"
                                    defaultValue={6}
                                 />
                                 <label className="form-check-label">
                                    Quis Repudiandae
                                 </label>
                                 <p className="font-light">(0)</p>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                     <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                     >
                        Discount Range
                     </button>
                  </h2>
                  <div
                     id="collapseSeven"
                     className="accordion-collapse collapse show"
                     aria-labelledby="headingSeven"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="category-list">
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    type="checkbox"
                                    id="flexCheckDefault19"
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault19"
                                 >
                                    5% and above
                                 </label>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    type="checkbox"
                                    id="flexCheckDefault20"
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault20"
                                 >
                                    10% and above
                                 </label>
                              </div>
                           </li>
                           <li>
                              <div className="form-check ps-0 custome-form-check">
                                 <input
                                    className="checkbox_animated check-it"
                                    type="checkbox"
                                    id="flexCheckDefault21"
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault21"
                                 >
                                    20% and above
                                 </label>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShopSidebarFilters;
