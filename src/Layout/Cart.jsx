import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import { NavLink, Navigate } from "react-router-dom";
import CartItem from "../Components/Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from "../redux/slices/CartSlice";
import { clearCart } from "../redux/slices/CartSlice";

const Cart = () => {
   const dispatch = useDispatch();
   const CartItems = useSelector((state) => state.cart.items);

   const clearCartHandler = () => {
      dispatch(clearCart());
   };

   return (
      <>
         <Breadcrumbs title="Кошик" />
         {/* Cart Section Start */}
         <section className="cart-section section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 text-center">
                     {CartItems.length > 0 ? (
                        <table className="table cart-table">
                           <thead>
                              <tr className="table-head">
                                 <th scope="col">Зображення</th>
                                 <th scope="col">Назва товару</th>
                                 <th scope="col">Ціна</th>
                                 <th scope="col">Кількість</th>
                                 <th scope="col">ПІдсумок</th>
                                 <th scope="col">Видалити</th>
                              </tr>
                           </thead>
                           <tbody>
                              {CartItems.map((product) => (
                                 <CartItem key={product.id} {...product} />
                              ))}
                           </tbody>
                        </table>
                     ) : (
                        <div className="cart__clear-cart-wrap">
                           <h3 className="cart__clear-cart-title">
                              Кошик наразі порожній
                           </h3>
                           <NavLink
                              className="btn btn-solid-default btn fw-bold mb-0 ms-0 cart__clear-cart-home-link"
                              to="/"
                           >
                              <i className="fas fa-arrow-left" /> Продовжити
                              покупки
                           </NavLink>
                        </div>
                     )}
                  </div>
                  <div className="col-12 mt-md-5 mt-4">
                     <div className="row">
                        <div className="col-sm-7 col-5 order-1">
                           <div className="left-side-button text-end d-flex d-block justify-content-end">
                              {/* <a
                                 href="javascript:void(0)"
                                 className="text-decoration-underline theme-color d-block text-capitalize"
                              >
                                 clear all items
                              </a> */}
                              <div
                                 onClick={clearCartHandler}
                                 className=" theme-color d-block text-capitalize clear-cart-btn"
                              >
                                 очистити кошик
                              </div>
                           </div>
                        </div>
                        <div className="col-sm-5 col-7">
                           <div className="left-side-button float-start">
                              <NavLink
                                 className="btn btn-solid-default btn fw-bold mb-0 ms-0 white"
                                 to="/"
                              >
                                 <i className="fas fa-arrow-left" /> Продовжити
                                 покупки
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
                                 className="btn btn-solid-default btn fw-bold white"
                                 to="/checkout"
                              >
                                 Оформлення замовлення
                                 <i className="fas fa-arrow-right ms-1" />
                              </NavLink>
                           </div>
                        </div>
                        <div className="col-lg-4">
                           <div className="cart-box">
                              <div className="cart-box-details">
                                 <div className="total-details">
                                    <div className="top-details">
                                       <h3>Підсумки кошику</h3>
                                       <h6>
                                          Підсумки до знижок
                                          <span>
                                             {useSelector(
                                                (state) => state.cart.totalPrice
                                             )}{" "}
                                             грн
                                          </span>
                                       </h6>
                                       <h6>
                                          Знижка <span>0 грн</span>
                                       </h6>
                                       <h6>
                                          Загальна сума{" "}
                                          <span>
                                             {useSelector(
                                                (state) => state.cart.totalPrice
                                             )}{" "}
                                             грн
                                          </span>
                                       </h6>
                                    </div>
                                    <div className="bottom-details">
                                       <NavLink to="/checkout">
                                          Перейти до оформлення замовлення
                                       </NavLink>
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
