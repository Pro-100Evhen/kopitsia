import React from "react";

// import "../assets/css/demo2.css";
import "../assets/css/demo4.css";

import "../assets/css/custom.css";

import "../assets/css/vendors/animate.css";
import "../assets/css/vendors/feather-icon.css";
import "../assets/css/vendors/font-awesome.css";
import "../assets/css/vendors/bootstrap.css";

import "../assets/css/vendors/ion.rangeSlider.min.css";
import "../assets/css/vendors/slick/slick-theme.css";
import "../assets/css/vendors/slick/slick.css";

import "../assets/css/main.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LitleCartItem from "../Components/Cart/LitleCartItem";

const Header = () => {
   const { totalPrice, items, withListItems } = useSelector(
      (state) => state.cart
   );

   const CartItems = useSelector((state) => state.cart.items);

   const showMobMenu = () => {
      document.querySelector(".nav-menu").classList.toggle("hideMenu");
   };

   const showCart = (event) => {
      event.preventDefault();
      document
         .querySelector(".onhover-dropdown.cart-dropdown")
         .classList.toggle("show");
   };

   return (
      <>
         <header className="header-style-2" id="home">
            <div className="main-header navbar-searchbar">
               <div className="container-fluid-lg">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="main-menu">
                           <div className="menu-left">
                              <div className="brand-logo">
                                 <NavLink to="/">
                                    <img
                                       src="assets/images/logo.png"
                                       className="h-logo img-fluid blur-up lazyload"
                                       alt="logo"
                                    ></img>
                                 </NavLink>
                              </div>
                           </div>

                           <nav>
                              <div className="main-navbar">
                                 <div id="mainnav">
                                    <div
                                       onClick={showMobMenu}
                                       className="toggle-nav"
                                    >
                                       <i className="fa fa-bars sidebar-bar"></i>
                                    </div>
                                    <ul className="nav-menu">
                                       <li className="back-btn d-xl-none">
                                          <div
                                             onClick={showMobMenu}
                                             className="close-btn"
                                          >
                                             Меню
                                             <span className="mobile-back">
                                                <i className="fa fa-angle-left"></i>
                                             </span>
                                          </div>
                                       </li>
                                       <li>
                                          <NavLink
                                             className={({ isActive }) =>
                                                isActive ? "activeLink" : ""
                                             }
                                             to="."
                                             end
                                          >
                                             Головна
                                          </NavLink>
                                       </li>

                                       <li>
                                          <NavLink
                                             className={({ isActive }) =>
                                                isActive ? "activeLink" : ""
                                             }
                                             to="/shop"
                                          >
                                             Магазин
                                          </NavLink>
                                       </li>

                                       <li>
                                          <NavLink
                                             className={({ isActive }) =>
                                                isActive ? "activeLink" : ""
                                             }
                                             to="/about"
                                          >
                                             Про нас
                                          </NavLink>
                                       </li>

                                       <li>
                                          <NavLink
                                             className={({ isActive }) =>
                                                isActive ? "activeLink" : ""
                                             }
                                             to="/categorys"
                                          >
                                             Категорії
                                          </NavLink>
                                       </li>

                                       {/* <li>
                                          <NavLink
                                             className={({ isActive }) =>
                                                isActive ? "activeLink" : ""
                                             }
                                             to="/wishlist"
                                          >
                                             Список бажань
                                          </NavLink>
                                       </li> */}
                                    </ul>
                                 </div>
                              </div>
                           </nav>

                           <div className="menu-right">
                              <ul>
                                 {/* Пошук, дороблю в наступних спрінтах */}
                                 {/* <li>
                                    <div className="search-box theme-bg-color">
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-search"
                                       >
                                          <circle
                                             cx="11"
                                             cy="11"
                                             r="8"
                                          ></circle>
                                          <line
                                             x1="21"
                                             y1="21"
                                             x2="16.65"
                                             y2="16.65"
                                          ></line>
                                       </svg>
                                    </div>
                                 </li> */}
                                 <li className="onhover-dropdown wislist-dropdown">
                                    <div className="cart-media">
                                       {/* <a href="wishlist/list.html">
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-heart"
                                          >
                                             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                          </svg>
                                          <span
                                             id="wishlist-count"
                                             className="label label-theme rounded-pill"
                                          >
                                             0
                                          </span>
                                       </a> */}
                                       <NavLink
                                          className={({ isActive }) =>
                                             isActive ? "activeLink" : ""
                                          }
                                          to="/wishlist"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-heart"
                                          >
                                             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                          </svg>
                                          <span
                                             id="wishlist-count"
                                             className="label label-theme rounded-pill"
                                          >
                                             {withListItems.length}
                                          </span>
                                       </NavLink>
                                    </div>
                                 </li>
                                 {/* <li className="onhover-dropdown wislist-dropdown">
                                    <div className="cart-media">
                                       
                                       <NavLink
                                          className={({ isActive }) =>
                                             isActive ? "activeLink" : ""
                                          }
                                          to="/cart"
                                       >
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="feather feather-shopping-cart"
                                          >
                                             <circle
                                                cx="9"
                                                cy="21"
                                                r="1"
                                             ></circle>
                                             <circle
                                                cx="20"
                                                cy="21"
                                                r="1"
                                             ></circle>
                                             <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                          </svg>
                                          <span
                                             id="cart-count"
                                             className="label label-theme rounded-pill"
                                          >
                                             {items.length}
                                          </span>
                                       </NavLink>
                                    </div>
                                 </li> */}

                                 <li
                                    onClick={showCart}
                                    className="onhover-dropdown cart-dropdown "
                                 >
                                    <NavLink
                                       to="/cart"
                                       type="button"
                                       className="btn btn-solid-default btn-spacing no-hover"
                                    >
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="feather feather-shopping-cart pe-2"
                                       >
                                          <circle cx={9} cy={21} r={1} />
                                          <circle cx={20} cy={21} r={1} />
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                       </svg>
                                       <span>
                                          {useSelector(
                                             (state) => state.cart.totalPrice
                                          )}{" "}
                                          грн
                                       </span>
                                    </NavLink>
                                    <div className="onhover-div">
                                       <div className="cart-menu">
                                          <div className="cart-title">
                                             <h6>
                                                <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={24}
                                                   height={24}
                                                   viewBox="0 0 24 24"
                                                   fill="none"
                                                   stroke="currentColor"
                                                   strokeWidth={2}
                                                   strokeLinecap="round"
                                                   strokeLinejoin="round"
                                                   className="feather feather-shopping-bag"
                                                >
                                                   <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                                   <line
                                                      x1={3}
                                                      y1={6}
                                                      x2={21}
                                                      y2={6}
                                                   />
                                                   <path d="M16 10a4 4 0 0 1-8 0" />
                                                </svg>
                                                <span className="label label-theme rounded-pill">
                                                   {useSelector(
                                                      (state) =>
                                                         state.cart.items.length
                                                   )}
                                                </span>
                                             </h6>
                                             <span className="d-md-none d-block">
                                                <i className="fas fa-arrow-right back-cart" />
                                             </span>
                                          </div>
                                          <ul className="custom-scroll">
                                             {CartItems.length > 0 ? (
                                                CartItems.map((product) => (
                                                   <LitleCartItem
                                                      key={product.id}
                                                      {...product}
                                                   />
                                                ))
                                             ) : (
                                                <li className="emty-cart-litle-label">
                                                   В кошику поки немає товарів
                                                </li>
                                             )}
                                          </ul>
                                       </div>
                                       <div className="cart-btn">
                                          <h6 className="cart-total">
                                             <span className="font-light">
                                                Загальна сума:
                                             </span>{" "}
                                             {useSelector(
                                                (state) => state.cart.totalPrice
                                             )}{" "}
                                             грн
                                          </h6>

                                          <NavLink
                                             className="btn btn-solid-default btn-block"
                                             to="/cart"
                                          >
                                             Перейдіть до оплати
                                          </NavLink>
                                       </div>
                                    </div>
                                 </li>

                                 <li className="onhover-dropdown">
                                    {/* <div className="cart-media name-usr">
                                                <i data-feather="user"></i>
                                            </div> */}
                                    {/* <div className="onhover-div profile-dropdown"> */}
                                    {/* <Dropdown>
                                    <Dropdown.Trigger>
                                       <button>
                                          <div className="cart-media name-usr">
                                             <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-user"
                                             >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                   cx="12"
                                                   cy="7"
                                                   r="4"
                                                ></circle>
                                             </svg>
                                          </div>
                                       </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                       {auth.user ? (
                                          <Dropdown.NavLink
                                             href={route("dashboard")}
                                             classNameName="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                          >
                                             Dashboard
                                          </Dropdown.NavLink>
                                       ) : (
                                          <>
                                             <Dropdown.NavLink
                                                href={route("login")}
                                                classNameName="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                             >
                                                Log in
                                             </Dropdown.NavLink>

                                             <Dropdown.NavLink
                                                href={route("register")}
                                                classNameName="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                             >
                                                Register
                                             </Dropdown.NavLink>
                                          </>
                                       )}
                                    </Dropdown.Content>
                                 </Dropdown> */}
                                    {/*<ul>
                                                 {auth.user ? (
                                                        <NavLink
                                                            href={route('dashboard')}
                                                            classNameName="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                                        >
                                                            Dashboard
                                                        </NavLink>
                                                    ) : (
                                                        <>
                                                            <NavLink
                                                                href={route('login')}
                                                                classNameName="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                                            >
                                                                Log in
                                                            </NavLink>

                                                            <NavLink
                                                                href={route('register')}
                                                                classNameName="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                                            >
                                                                Register
                                                            </NavLink>
                                                        </>
                                                    )} */}

                                    {/* <li>
                                                        <a
                                                            href="login.html"
                                                            className="d-block"
                                                        >
                                                            Login
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="register.html"
                                                            className="d-block"
                                                        >
                                                            Register
                                                        </a>
                                                    </li> 


                                                </ul>*/}
                                    {/* </div> */}
                                 </li>
                              </ul>
                           </div>

                           <div className="search-full">
                              <form
                                 method="GET"
                                 className="search-full"
                                 action="http://localhost:8000/search"
                              >
                                 <div className="input-group">
                                    <span className="input-group-text">
                                       <i
                                          data-feather="search"
                                          className="font-light"
                                       ></i>
                                    </span>
                                    <input
                                       type="text"
                                       name="q"
                                       className="form-control search-type"
                                       placeholder="Search here.."
                                    ></input>
                                    <span className="input-group-text close-search">
                                       <i
                                          data-feather="x"
                                          className="font-light"
                                       ></i>
                                    </span>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         {/* <div className="mobile-menu d-sm-none">
            <ul>
               <li>
                  <a href="demo3.php" className="active">
                     <i data-feather="home"></i>
                     <span>Home</span>
                  </a>
               </li>
               <li>
                  <i data-feather="align-justify"></i>
                  <span>Category</span>
               </li>
               <li>
                  <i data-feather="shopping-bag"></i>
                  <span>Cart</span>
               </li>
               <li>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="feather feather-heart"
                  >
                     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span>Wishlist</span>
               </li>
               <li>
                  <a href="user-dashboard.php">
                     <i data-feather="user"></i>
                     <span>Account</span>
                  </a>
               </li>
            </ul>
         </div> */}
      </>
   );
};

export default Header;
