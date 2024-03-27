import React from "react";

import "../assets/css/demo2.css";
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
const Header = () => {
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
                                 <a href="index.htm">
                                    <img
                                       src="assets/images/logo.png"
                                       className="h-logo img-fluid blur-up lazyload"
                                       alt="logo"
                                    ></img>
                                 </a>
                              </div>
                           </div>

                           <nav>
                              <div className="main-navbar">
                                 <div id="mainnav">
                                    <div className="toggle-nav">
                                       <i className="fa fa-bars sidebar-bar"></i>
                                    </div>
                                    <ul className="nav-menu">
                                       <li className="back-btn d-xl-none">
                                          <div className="close-btn">
                                             Menu
                                             <span className="mobile-back">
                                                <i className="fa fa-angle-left"></i>
                                             </span>
                                          </div>
                                       </li>
                                       <li>
                                          <a
                                             href="index.htm"
                                             className="nav-link menu-title"
                                          >
                                             Home
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="shop.html"
                                             className="nav-link menu-title"
                                          >
                                             Shop
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="cart/list.html"
                                             className="nav-link menu-title"
                                          >
                                             Cart
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="about-us.html"
                                             className="nav-link menu-title"
                                          >
                                             About Us
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="contact-us.html"
                                             className="nav-link menu-title"
                                          >
                                             Contact Us
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="blog.html"
                                             className="nav-link menu-title"
                                          >
                                             Blog
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </nav>

                           <div className="menu-right">
                              <ul>
                                 <li>
                                    <div className="search-box theme-bg-color">
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          class="feather feather-search"
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
                                 </li>
                                 <li className="onhover-dropdown wislist-dropdown">
                                    <div className="cart-media">
                                       <a href="wishlist/list.html">
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                             class="feather feather-heart"
                                          >
                                             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                          </svg>
                                          <span
                                             id="wishlist-count"
                                             className="label label-theme rounded-pill"
                                          >
                                             0
                                          </span>
                                       </a>
                                    </div>
                                 </li>
                                 <li className="onhover-dropdown wislist-dropdown">
                                    <div className="cart-media">
                                       <a href="cart/list.html">
                                          <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor"
                                             stroke-width="2"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                             class="feather feather-shopping-cart"
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
                                             0
                                          </span>
                                       </a>
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
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-user"
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
                                          <Dropdown.Link
                                             href={route("dashboard")}
                                             classNameName="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                          >
                                             Dashboard
                                          </Dropdown.Link>
                                       ) : (
                                          <>
                                             <Dropdown.Link
                                                href={route("login")}
                                                classNameName="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                             >
                                                Log in
                                             </Dropdown.Link>

                                             <Dropdown.Link
                                                href={route("register")}
                                                classNameName="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                             >
                                                Register
                                             </Dropdown.Link>
                                          </>
                                       )}
                                    </Dropdown.Content>
                                 </Dropdown> */}
                                    {/*<ul>
                                                 {auth.user ? (
                                                        <Link
                                                            href={route('dashboard')}
                                                            classNameName="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                                        >
                                                            Dashboard
                                                        </Link>
                                                    ) : (
                                                        <>
                                                            <Link
                                                                href={route('login')}
                                                                classNameName="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                                            >
                                                                Log in
                                                            </Link>

                                                            <Link
                                                                href={route('register')}
                                                                classNameName="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                                            >
                                                                Register
                                                            </Link>
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
         <div className="mobile-menu d-sm-none">
            <ul>
               <li>
                  <a href="demo3.php" className="active">
                     <i data-feather="home"></i>
                     <span>Home</span>
                  </a>
               </li>
               <li>
                  <a href="javascript:void(0)">
                     <i data-feather="align-justify"></i>
                     <span>Category</span>
                  </a>
               </li>
               <li>
                  <a href="javascript:void(0)">
                     <i data-feather="shopping-bag"></i>
                     <span>Cart</span>
                  </a>
               </li>
               <li>
                  <a href="javascript:void(0)">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-heart"
                     >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                     </svg>
                     <span>Wishlist</span>
                  </a>
               </li>
               <li>
                  <a href="user-dashboard.php">
                     <i data-feather="user"></i>
                     <span>Account</span>
                  </a>
               </li>
            </ul>
         </div>
      </>
   );
};

export default Header;
