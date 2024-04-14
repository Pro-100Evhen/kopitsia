import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import { NavLink, Navigate } from "react-router-dom";

const Cart = () => {
   return (
      <>
         <Breadcrumbs title="Cart" />
         {/* Cart Section Start */}
         <section className="cart-section section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 text-center">
                     <table className="table cart-table">
                        <thead>
                           <tr className="table-head">
                              <th scope="col">image</th>
                              <th scope="col">product name</th>
                              <th scope="col">price</th>
                              <th scope="col">quantity</th>
                              <th scope="col">total</th>
                              <th scope="col">action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <a href="../product/details.html">
                                    <img
                                       src="../assets/images/fashion/product/front/24.jpg"
                                       className="blur-up lazyloaded"
                                       alt
                                    />
                                 </a>
                              </td>
                              <td>
                                 <a href="../product/details.html">
                                    A Porro Voluptatibus Dolores
                                 </a>
                                 <div className="mobile-cart-content row">
                                    <div className="col">
                                       <div className="qty-box">
                                          <div className="input-group">
                                             <input
                                                type="text"
                                                name="quantity"
                                                className="form-control input-number"
                                                defaultValue={1}
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col">
                                       <h2>$18</h2>
                                    </div>
                                    <div className="col">
                                       <h2 className="td-color">
                                          <a href="javascript:void(0)">
                                             <i className="fas fa-times" />
                                          </a>
                                       </h2>
                                    </div>
                                 </div>
                              </td>
                              <td>
                                 <h2>$18</h2>
                              </td>
                              <td>
                                 <div className="qty-box">
                                    <div className="input-group">
                                       <input
                                          type="number"
                                          name="quantity"
                                          data-rowid="ba02b0dddb000b25445168300c65386d"
                                          className="form-control input-number"
                                          defaultValue={1}
                                       />
                                    </div>
                                 </div>
                              </td>
                              <td>
                                 <h2 className="td-color">$18.00</h2>
                              </td>
                              <td>
                                 <a href="javascript:void(0)">
                                    <i className="fas fa-times" />
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <a href="../product/details.html">
                                    <img
                                       src="../assets/images/fashion/product/front/7.jpg"
                                       className="blur-up lazyloaded"
                                       alt
                                    />
                                 </a>
                              </td>
                              <td>
                                 <a href="../product/details.html">
                                    Et Voluptatem Repellendus Pariatur
                                 </a>
                                 <div className="mobile-cart-content row">
                                    <div className="col">
                                       <div className="qty-box">
                                          <div className="input-group">
                                             <input
                                                type="text"
                                                name="quantity"
                                                className="form-control input-number"
                                                defaultValue={1}
                                             />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col">
                                       <h2>$8</h2>
                                    </div>
                                    <div className="col">
                                       <h2 className="td-color">
                                          <a href="javascript:void(0)">
                                             <i className="fas fa-times" />
                                          </a>
                                       </h2>
                                    </div>
                                 </div>
                              </td>
                              <td>
                                 <h2>$8</h2>
                              </td>
                              <td>
                                 <div className="qty-box">
                                    <div className="input-group">
                                       <input
                                          type="number"
                                          name="quantity"
                                          data-rowid="8eb747b95b9862e9d83031beb9938720"
                                          className="form-control input-number"
                                          defaultValue={1}
                                       />
                                    </div>
                                 </div>
                              </td>
                              <td>
                                 <h2 className="td-color">$8.00</h2>
                              </td>
                              <td>
                                 <a href="javascript:void(0)">
                                    <i className="fas fa-times" />
                                 </a>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div className="col-12 mt-md-5 mt-4">
                     <div className="row">
                        <div className="col-sm-7 col-5 order-1">
                           <div className="left-side-button text-end d-flex d-block justify-content-end">
                              <a
                                 href="javascript:void(0)"
                                 className="text-decoration-underline theme-color d-block text-capitalize"
                              >
                                 clear all items
                              </a>
                           </div>
                        </div>
                        <div className="col-sm-5 col-7">
                           <div className="left-side-button float-start">
                              {/* <a
                                 href="../shop.html"
                                 className="btn btn-solid-default btn fw-bold mb-0 ms-0"
                              >
                                 <i className="fas fa-arrow-left" /> Continue
                                 Shopping
                              </a> */}
                              <NavLink
                                 className="btn btn-solid-default btn fw-bold mb-0 ms-0"
                                 to="/"
                              >
                                 <i className="fas fa-arrow-left" /> Continue
                                 Shopping
                              </NavLink>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="cart-checkout-section">
                     <div className="row g-4">
                        <div className="col-lg-4 col-sm-6">
                           {/* <div className="promo-section">
                              <form className="row g-3">
                                 <div className="col-7">
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="number"
                                       placeholder="Coupon Code"
                                    />
                                 </div>
                                 <div className="col-5">
                                    <button className="btn btn-solid-default rounded btn">
                                       Apply Coupon
                                    </button>
                                 </div>
                              </form>
                           </div> */}
                        </div>
                        <div className="col-lg-4 col-sm-6 ">
                           <div className="checkout-button">
                              <NavLink
                                 className="btn btn-solid-default btn fw-bold"
                                 to="/checkout"
                              >
                                 Check Out
                                 <i className="fas fa-arrow-right ms-1" />
                              </NavLink>
                           </div>
                        </div>
                        <div className="col-lg-4">
                           <div className="cart-box">
                              <div className="cart-box-details">
                                 <div className="total-details">
                                    <div className="top-details">
                                       <h3>Cart Totals</h3>
                                       <h6>
                                          Sub Total <span>$26.00</span>
                                       </h6>
                                       <h6>
                                          Tax <span>$5.46</span>
                                       </h6>
                                       <h6>
                                          Total <span>$31.46</span>
                                       </h6>
                                    </div>
                                    <div className="bottom-details">
                                       <a href="checkout">Process Checkout</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Cart;
