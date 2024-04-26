import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
   const showCartParams = () => {
      const cartParamsBlock = document
         .querySelector(".cart-pay-deteils")
         .classList.toggle("hide-other-payment-method");
   };

   return (
      <>
         <Breadcrumbs title="Оформлення замовлення" />

         {/* Cart Section Start */}
         <section className="section-b-space">
            <div className="container">
               <div className="row g-4">
                  <div className="col-lg-8">
                     <form
                        className="needs-validation"
                        method="POST"
                        action="place-order"
                     >
                        <input
                           type="hidden"
                           name="_token"
                           defaultValue="CVH6XgdFhoUV6OBdiTIlT2bviIidpb0qD6U1Vf68"
                        />
                        <div id="billingAddress" className="row g-4">
                           <h3 className="mb-3 theme-color">Платіжна адреса</h3>
                           <div className="col-md-6">
                              <label htmlFor="name" className="form-label">
                                 Ім'я
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="name"
                                 name="name"
                                 placeholder="Введіть повне ім'я"
                              />
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="phone" className="form-label">
                                 Телефон
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="phone"
                                 name="phone"
                                 placeholder="Введіть номер телефону"
                              />
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="locality" className="form-label">
                                 Місцевість
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="locality"
                                 name="locality"
                                 placeholder="Місцевість"
                              />
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="landmark" className="form-label">
                                 Орієнтир
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="landmark"
                                 name="landmark"
                                 placeholder="Орієнтир"
                              />
                           </div>
                           <div className="col-md-12">
                              <label htmlFor="address" className="form-label">
                                 Адреса
                              </label>
                              <textarea
                                 className="form-control"
                                 id="address"
                                 name="address"
                                 defaultValue={""}
                              />
                           </div>
                           <div className="col-md-3">
                              <label htmlFor="city" className="form-label">
                                 Місто
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="city"
                                 name="city"
                                 placeholder="Місто"
                              />
                           </div>
                           {/* <div className="col-md-3">
                              <label htmlFor="country" className="form-label">
                                 Country
                              </label>
                              <select
                                 className="form-select custome-form-select"
                                 id="country"
                                 name="country"
                              >
                                 <option>India</option>
                              </select>
                              <div className="invalid-feedback">
                                 Please select a valid country.
                              </div>
                           </div> */}
                           {/* <div className="col-md-3">
                              <label htmlFor="state" className="form-label">
                                 State
                              </label>
                              <select
                                 className="form-select custome-form-select"
                                 id="state"
                                 name="state"
                              >
                                 <option selected disabled value>
                                    Choose...
                                 </option>
                                 <option value="Andhra Pradesh">
                                    Andhra Pradesh
                                 </option>
                                 <option value="Arunachal Pradesh">
                                    Arunachal Pradesh
                                 </option>
                                 <option value="Assam">Assam</option>
                                 <option value="Bihar">Bihar</option>
                                 <option value="Chhattisgarh">
                                    Chhattisgarh
                                 </option>
                                 <option value="Goa">Goa</option>
                                 <option value="Gujarat">Gujarat</option>
                                 <option value="Haryana">Haryana</option>
                                 <option value="Himachal Pradesh">
                                    Himachal Pradesh
                                 </option>
                                 <option value="Jharkhand">Jharkhand</option>
                                 <option value="Karnataka">Karnataka</option>
                                 <option value="Kerala">Kerala</option>
                                 <option value="Madhya Pradesh">
                                    Madhya Pradesh
                                 </option>
                                 <option value="Maharashtra">
                                    Maharashtra
                                 </option>
                                 <option value="Manipur">Manipur</option>
                                 <option value="Meghalaya">Meghalaya</option>
                                 <option value="Mizoram">Mizoram</option>
                                 <option value="Nagaland">Nagaland</option>
                                 <option value="Odisha">Odisha</option>
                                 <option value="Punjab">Punjab</option>
                                 <option value="Rajasthan">Rajasthan</option>
                                 <option value="Sikkim">Sikkim</option>
                                 <option value="Tamil Nadu">Tamil Nadu</option>
                                 <option value="Telangana">Telangana</option>
                                 <option value="Tripura">Tripura</option>
                                 <option value="Uttar Pradesh">
                                    Uttar Pradesh
                                 </option>
                                 <option value="Uttarakhand">
                                    Uttarakhand
                                 </option>
                                 <option value="West Bengal">
                                    West Bengal
                                 </option>
                              </select>
                           </div> */}
                           <div className="col-md-3">
                              <label htmlFor="zip" className="form-label">
                                 Zip
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="zip"
                                 name="zip"
                                 placeholder={123456}
                              />
                           </div>
                           {/* <div
                              className="col-md-12 form-check ps-0 mt-3 custome-form-check"
                              style={{ paddingLeft: "15px !important" }}
                           >
                              <input
                                 className="checkbox_animated check-it"
                                 type="checkbox"
                                 name="sameAsBilling"
                                 id="sameAsBilling"
                              />
                              <label
                                 className="form-check-label checkout-label"
                                 htmlFor="sameAsBilling"
                              >
                                 Shipping address is same as Billing Address
                              </label>
                           </div> */}
                        </div>
                        {/* <div id="shippingAddress" className="row g-4 mt-5">
                           <h3 className="mb-3 theme-color">
                              Shipping address
                           </h3>
                           <div className="col-md-6">
                              <label htmlFor="name" className="form-label">
                                 Name
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="s_name"
                                 name="s_name"
                                 placeholder="Enter Full Name"
                              />
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="phone" className="form-label">
                                 Phone
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="s_phone"
                                 name="s_phone"
                                 placeholder="Enter Phone Number"
                              />
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="locality" className="form-label">
                                 Locality
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="s_locality"
                                 name="s_locality"
                                 placeholder="Locality"
                              />
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="landmark" className="form-label">
                                 Landmark
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="s_landmark"
                                 name="s_landmark"
                                 placeholder="Landmark"
                              />
                           </div>
                           <div className="col-md-12">
                              <label htmlFor="address" className="form-label">
                                 Address
                              </label>
                              <textarea
                                 className="form-control"
                                 id="s_address"
                                 name="s_address"
                                 defaultValue={""}
                              />
                           </div>
                           <div className="col-md-3">
                              <label htmlFor="city" className="form-label">
                                 City
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="s_city"
                                 name="s_city"
                                 placeholder="City"
                              />
                           </div>
                           <div className="col-md-3">
                              <label htmlFor="country" className="form-label">
                                 Country
                              </label>
                              <select
                                 className="form-select custome-form-select"
                                 id="s_country"
                                 name="s_country"
                              >
                                 <option>India</option>
                              </select>
                           </div>
                           <div className="col-md-3">
                              <label htmlFor="state" className="form-label">
                                 State
                              </label>
                              <select
                                 className="form-select custome-form-select"
                                 id="s_state"
                                 name="s_state"
                              >
                                 <option selected disabled value>
                                    Choose...
                                 </option>
                                 <option value="Andhra Pradesh">
                                    Andhra Pradesh
                                 </option>
                                 <option value="Arunachal Pradesh">
                                    Arunachal Pradesh
                                 </option>
                                 <option value="Assam">Assam</option>
                                 <option value="Bihar">Bihar</option>
                                 <option value="Chhattisgarh">
                                    Chhattisgarh
                                 </option>
                                 <option value="Goa">Goa</option>
                                 <option value="Gujarat">Gujarat</option>
                                 <option value="Haryana">Haryana</option>
                                 <option value="Himachal Pradesh">
                                    Himachal Pradesh
                                 </option>
                                 <option value="Jharkhand">Jharkhand</option>
                                 <option value="Karnataka">Karnataka</option>
                                 <option value="Kerala">Kerala</option>
                                 <option value="Madhya Pradesh">
                                    Madhya Pradesh
                                 </option>
                                 <option value="Maharashtra">
                                    Maharashtra
                                 </option>
                                 <option value="Manipur">Manipur</option>
                                 <option value="Meghalaya">Meghalaya</option>
                                 <option value="Mizoram">Mizoram</option>
                                 <option value="Nagaland">Nagaland</option>
                                 <option value="Odisha">Odisha</option>
                                 <option value="Punjab">Punjab</option>
                                 <option value="Rajasthan">Rajasthan</option>
                                 <option value="Sikkim">Sikkim</option>
                                 <option value="Tamil Nadu">Tamil Nadu</option>
                                 <option value="Telangana">Telangana</option>
                                 <option value="Tripura">Tripura</option>
                                 <option value="Uttar Pradesh">
                                    Uttar Pradesh
                                 </option>
                                 <option value="Uttarakhand">
                                    Uttarakhand
                                 </option>
                                 <option value="West Bengal">
                                    West Bengal
                                 </option>
                              </select>
                           </div>
                           <div className="col-md-3">
                              <label htmlFor="zip" className="form-label">
                                 Zip
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="s_zip"
                                 name="s_zip"
                                 placeholder={123456}
                              />
                           </div>
                        </div> */}
                        {/* <div className="form-check ps-0 mt-3 custome-form-check">
                           <input
                              className="checkbox_animated check-it"
                              type="checkbox"
                              name="saveAddress"
                              id="saveAddress"
                           />
                           <label
                              className="form-check-label checkout-label"
                              htmlFor="saveAddress"
                           >
                              Save this information for next time
                           </label>
                        </div> */}
                        <hr className="my-lg-5 my-4" />
                        <h3 className="mb-3">Оплата</h3>
                        <div className="d-block my-3">
                           <div className="form-check custome-radio-box">
                              <input
                                 onChange={showCartParams}
                                 className="form-check-input"
                                 type="radio"
                                 name="flexRadioDefault"
                                 defaultChecked
                                 id="cod"
                              />
                              <label className="form-check-label" htmlFor="cod">
                                 Оплата накладеним платежем
                              </label>
                           </div>
                           <div className="form-check custome-radio-box">
                              <input
                                 onChange={showCartParams}
                                 className="form-check-input"
                                 type="radio"
                                 name="flexRadioDefault"
                                 id="debit"
                              />
                              <label
                                 className="form-check-label"
                                 htmlFor="debit"
                              >
                                 За номером карти
                              </label>
                           </div>
                        </div>
                        <div className="cart-pay-deteils row g-4 hide-other-payment-method">
                           <div className="col-md-6">
                              <label htmlFor="cc-name" className="form-label">
                                 Ім'я на картці
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="cc-name"
                              />
                              <div id="emailHelp" className="form-text">
                                 Повне ім'я, як вказано на картці
                              </div>
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="cc-number" className="form-label">
                                 Номер кредитної картки
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="cc-number"
                              />
                              <div className="invalid-feedback">
                                 Номер кредитної картки обов'язковий
                              </div>
                           </div>
                           <div className="col-md-3">
                              <label
                                 htmlFor="expiration"
                                 className="form-label"
                              >
                                 Закінчення терміну дії
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="expiration"
                              />
                           </div>
                           <div className="col-md-3">
                              <label htmlFor="cc-cvv" className="form-label">
                                 CVV
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="cc-cvv"
                              />
                           </div>
                        </div>
                        {/* <button
                           className="btn btn-solid-default mt-4 white"
                           type="submit"
                        >
                           Оформити замовлення
                        </button> */}
                        <NavLink
                           to="/thankyou"
                           className="btn btn-solid-default mt-4 white"
                        >
                           Оформити замовлення
                        </NavLink>
                     </form>
                  </div>
                  <div className="col-lg-4">
                     <div className="your-cart-box">
                        <h3 className="mb-3 d-flex text-capitalize">
                           Ваш кошик
                           <span className="badge bg-theme new-badge rounded-pill ms-auto bg-dark">
                              {useSelector((state) => state.cart.items.length)}
                           </span>
                        </h3>
                        <ul className="list-group mb-3">
                           <li className="list-group-item d-flex justify-content-between lh-condensed active">
                              <div className="text-dark">
                                 <h6 className="my-0">Промокод</h6>
                                 <small />
                              </div>
                              <span>$0.00</span>
                           </li>
                           <li className="list-group-item d-flex lh-condensed justify-content-between">
                              <span className="fw-bold">Підсумки (Грн)</span>
                              <strong>
                                 {useSelector((state) => state.cart.totalPrice)}
                                 грн
                              </strong>
                           </li>
                        </ul>
                        {/* <form className="card border-0">
                           <div className="input-group custome-imput-group">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Promo code"
                              />
                              <div className="input-group-append">
                                 <button
                                    type="submit"
                                    className="btn btn-solid-default rounded-0"
                                 >
                                    Redeem
                                 </button>
                              </div>
                           </div>
                        </form> */}
                        {/* Допиляти функціонал промокоду */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Cart Section End */}
      </>
   );
};

export default CheckOut;
