import React from "react";

const CartBuyProduct = () => {
   return (
      <div
         className="modal fade cart-modal"
         id="addtocart"
         tabindex="-1"
         role="dialog"
         aria-label="myModalLabel"
         aria-hidden="true"
      >
         <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content ">
               <div className="modal-header">
                  <button
                     type="button"
                     className="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                  ></button>
               </div>

               <div className="modal-body">
                  <div className="modal-contain">
                     <div>
                        <div className="modal-messages">
                           <i className="fas fa-check"></i> 3-stripes full-zip
                           hoodie successfully added to you cart.
                        </div>
                        <div className="modal-product">
                           <div className="modal-contain-img">
                              <img
                                 src="assets/images/fashion/instagram/4.jpg"
                                 className="img-fluid blur-up lazyload"
                                 alt=""
                              />
                           </div>
                           <div className="modal-contain-details">
                              <h4>Premier Cropped Skinny Jean</h4>
                              <p className="font-light my-2">Yellow, Qty : 3</p>
                              <div className="product-total">
                                 <h5>
                                    TOTAL : <span>$1,140.00</span>
                                 </h5>
                              </div>
                              <div className="shop-cart-button mt-3">
                                 <a
                                    href="shop-left-sidebar.php"
                                    className="btn default-light-theme conti-button default-theme default-theme-2 rounded"
                                 >
                                    CONTINUE SHOPPING
                                 </a>
                                 <a
                                    href="cart.php"
                                    className="btn default-light-theme conti-button default-theme default-theme-2 rounded"
                                 >
                                    VIEW CART
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="ratio_asos mt-4">
                     <div className="container">
                        <div className="row m-0">
                           <div className="col-sm-12 p-0">
                              <div className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space spacing-slider">
                                 <div>
                                    <div className="product-box">
                                       <div className="img-wrapper">
                                          <div className="front">
                                             <a href="product/details.html">
                                                <img
                                                   src="assets/images/fashion/product/front/1.jpg"
                                                   className="bg-img blur-up lazyload"
                                                   alt=""
                                                />
                                             </a>
                                          </div>
                                       </div>
                                       <div className="product-details text-center">
                                          <div className="rating-details d-block text-center">
                                             <span className="font-light grid-content">
                                                B&Y Jacket
                                             </span>
                                          </div>
                                          <div className="main-price mt-0 d-block text-center">
                                             <h3 className="theme-color">
                                                $78.00
                                             </h3>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div>
                                    <div className="product-box">
                                       <div className="img-wrapper">
                                          <div className="front">
                                             <a href="product/details.html">
                                                <img
                                                   src="assets/images/fashion/product/front/2.jpg"
                                                   className="bg-img blur-up lazyload"
                                                   alt=""
                                                />
                                             </a>
                                          </div>
                                       </div>
                                       <div className="product-details text-center">
                                          <div className="rating-details d-block text-center">
                                             <span className="font-light grid-content">
                                                B&Y Jacket
                                             </span>
                                          </div>
                                          <div className="main-price mt-0 d-block text-center">
                                             <h3 className="theme-color">
                                                $78.00
                                             </h3>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div>
                                    <div className="product-box">
                                       <div className="img-wrapper">
                                          <div className="front">
                                             <a href="product/details.html">
                                                <img
                                                   src="assets/images/fashion/product/front/3.jpg"
                                                   className="bg-img blur-up lazyload"
                                                   alt=""
                                                />
                                             </a>
                                          </div>
                                       </div>
                                       <div className="product-details text-center">
                                          <div className="rating-details d-block text-center">
                                             <span className="font-light grid-content">
                                                B&Y Jacket
                                             </span>
                                          </div>
                                          <div className="main-price mt-0 d-block text-center">
                                             <h3 className="theme-color">
                                                $78.00
                                             </h3>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div>
                                    <div className="product-box">
                                       <div className="img-wrapper">
                                          <div className="front">
                                             <a href="product/details.html">
                                                <img
                                                   src="assets/images/fashion/product/front/4.jpg"
                                                   className="bg-img blur-up lazyload"
                                                   alt=""
                                                />
                                             </a>
                                          </div>
                                       </div>
                                       <div className="product-details text-center">
                                          <div className="rating-details d-block text-center">
                                             <span className="font-light grid-content">
                                                B&Y Jacket
                                             </span>
                                          </div>
                                          <div className="main-price mt-0 d-block text-center">
                                             <h3 className="theme-color">
                                                $78.00
                                             </h3>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CartBuyProduct;
