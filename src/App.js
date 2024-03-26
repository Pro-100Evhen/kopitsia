import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

function App() {
   return (
      <>
         {/* <div classNameName="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
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
                  )}
              </div> */}

         {/* <Header auth={auth}></Header> */}
         <Header></Header>

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

         <section className="pt-0 poster-section">
            <div className="poster-image slider-for custome-arrow classNameic-arrow">
               <div>
                  <img
                     src="assets/images/furniture-images/poster/1.png"
                     className="img-fluid blur-up lazyload"
                     alt="main-full-1"
                  />
               </div>
               <div>
                  <img
                     src="assets/images/furniture-images/poster/2.png"
                     className="img-fluid blur-up lazyload"
                     alt="main-full-2"
                  />
               </div>
               <div>
                  <img
                     src="assets/images/furniture-images/poster/3.png"
                     className="img-fluid blur-up lazyload"
                     alt="main-full-3"
                  />
               </div>
            </div>
            <div className="slider-nav image-show">
               <div>
                  <div className="poster-img">
                     <img
                        src="assets/images/furniture-images/poster/t2.jpg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                     />
                     <div className="overlay-color">
                        <i className="fas fa-plus theme-color"></i>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="poster-img">
                     <img
                        src="assets/images/furniture-images/poster/t1.jpg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                     />
                     <div className="overlay-color">
                        <i className="fas fa-plus theme-color"></i>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="poster-img">
                     <img
                        src="assets/images/furniture-images/poster/t3.jpg"
                        className="img-fluid blur-up lazyload"
                        alt=""
                     />
                     <div className="overlay-color">
                        <i className="fas fa-plus theme-color"></i>
                     </div>
                  </div>
               </div>
            </div>

            <div className="left-side-contain">
               <div className="banner-left">
                  <h4>
                     Sale <span className="theme-color">35% Off</span>
                  </h4>
                  <h1>
                     New Latest <span>Dresses</span>
                  </h1>
                  <p>
                     BUY ONE GET ONE <span className="theme-color">FREE</span>
                  </p>
                  <h2>
                     $79.00{" "}
                     <span className="theme-color">
                        <del>$65.00</del>
                     </span>
                  </h2>
                  <p className="poster-details mb-0">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p>
               </div>
            </div>

            <div className="right-side-contain">
               <div className="social-image">
                  <h6>Facebook</h6>
               </div>

               <div className="social-image">
                  <h6>Instagram</h6>
               </div>

               <div className="social-image">
                  <h6>Twitter</h6>
               </div>
            </div>
         </section>

         {/* <!-- banner section start --> */}
         <section className="ratio2_1 banner-style-2">
            <div className="container">
               <div className="row gy-4">
                  <div className="col-lg-4 col-md-6">
                     <div className="collection-banner p-bottom p-center text-center">
                        <a href="shop-left-sidebar.html" className="banner-img">
                           <img
                              src="assets/images/fashion/banner/1.jpg"
                              className="bg-img blur-up lazyload"
                              alt="image-full-1"
                           />
                        </a>
                        <div className="banner-detail">
                           <a
                              href="javacript:void(0)"
                              className="heart-wishlist"
                           >
                              <i className="far fa-heart"></i>
                           </a>
                           <span className="font-dark-30">
                              26% <span>OFF</span>
                           </span>
                        </div>
                        <a
                           href="shop-left-sidebar.html"
                           className="contain-banner"
                        >
                           <div className="banner-content with-big">
                              <h2 className="mb-2">New Hoodie</h2>
                              <span>BUY ONE GET ONE FREE</span>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                     <div className="collection-banner p-bottom p-center text-center">
                        <a href="shop-left-sidebar.html" className="banner-img">
                           <img
                              src="assets/images/fashion/banner/2.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                           />
                        </a>
                        <div className="banner-detail">
                           <a
                              href="javacript:void(0)"
                              className="heart-wishlist"
                           >
                              <i className="far fa-heart"></i>
                           </a>
                           <span className="font-dark-30">
                              50% <span>OFF</span>
                           </span>
                        </div>
                        <a
                           href="shop-left-sidebar.html"
                           className="contain-banner"
                        >
                           <div className="banner-content with-big">
                              <h2 className="mb-2">Women Fashion</h2>
                              <span>New offer 50% off</span>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="collection-banner p-bottom p-center text-center">
                        <a href="shop-left-sidebar.html" className="banner-img">
                           <img
                              src="assets/images/fashion/banner/3.jpg"
                              className="bg-img blur-up lazyload"
                              alt=""
                           />
                        </a>
                        <div className="banner-detail">
                           <a
                              href="javacript:void(0)"
                              className="heart-wishlist"
                           >
                              <i className="far fa-heart"></i>
                           </a>
                           <span className="font-dark-30">
                              36% <span>OFF</span>
                           </span>
                        </div>
                        <a
                           href="shop-left-sidebar.html"
                           className="contain-banner"
                        >
                           <div className="banner-content with-big">
                              <h2 className="mb-2">New Jacket</h2>
                              <span>BUY ONE GET ONE FREE</span>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- banner section end --> */}

         <section className="ratio_asos overflow-hidden">
            <div className="container p-sm-0">
               <div className="row m-0">
                  <div className="col-12 p-0">
                     <div className="title-3 text-center">
                        <h2>New Arrival</h2>
                        <h5 className="theme-color">Our Collection</h5>
                     </div>
                  </div>
               </div>

               <div className="row g-sm-4 g-3">
                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/10.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$5</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">
                                 Dolores Et
                              </p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Dolorem Libero Tempore Voluptatem</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/10.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$3</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">
                                 Dolores Et
                              </p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Quia Non Soluta Aut</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/17.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$8</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">
                                 Blanditiis Error
                              </p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Nulla Sapiente Sunt Ipsam</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/3.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$4</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">Qui Ut</p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Fuga Officia Quaerat Fugiat</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/2.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$11</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">
                                 Dolores Et
                              </p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Doloremque Quibusdam Maxime Natus</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/12.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$19</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">
                                 Cupiditate Minus
                              </p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Nihil Beatae Sit Sed</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/3.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$4</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">
                                 Cupiditate Minus
                              </p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Non Sed Tempora Accusamus</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/8.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$18</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">
                                 Blanditiis Error
                              </p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Odit Corporis Ut Pariatur</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/23.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$20</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">
                                 Blanditiis Error
                              </p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Iste Qui Voluptatibus Sunt</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/11.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$7</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">
                                 Cupiditate Minus
                              </p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Quidem Architecto Deleniti Hic</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/20.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$5</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">Qui Ut</p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Error Itaque Debitis Commodi</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-2 col-lg-2 col-6">
                     <div className="product-box">
                        <div className="img-wrapper">
                           <a href="product/details.html">
                              <img
                                 src="assets/images/fashion/product/front/20.jpg"
                                 className="w-100 bg-img blur-up lazyload"
                                 alt=""
                              />
                           </a>
                           <div className="circle-shape"></div>
                           <span className="background-text">Furniture</span>
                           <div className="label-block">
                              <span className="label label-theme">30% Off</span>
                           </div>
                           <div className="cart-wrap">
                              <ul>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="addtocart-btn"
                                    >
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
                                          <circle cx="9" cy="21" r="1"></circle>
                                          <circle
                                             cx="20"
                                             cy="21"
                                             r="1"
                                          ></circle>
                                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                       </svg>
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
                                          class="feather feather-eye"
                                       >
                                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                          <circle
                                             cx="12"
                                             cy="12"
                                             r="3"
                                          ></circle>
                                       </svg>
                                    </a>
                                 </li>
                                 <li>
                                    <a
                                       href="javascript:void(0)"
                                       className="wishlist"
                                    >
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
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="product-style-3 product-style-chair">
                           <div className="product-title d-block mb-0">
                              <div className="r-price">
                                 <div className="theme-color">$21</div>
                                 <div className="main-price">
                                    <ul className="rating mb-1 mt-0">
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star theme-color"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                       <li>
                                          <i className="fas fa-star"></i>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                              <p className="font-light mb-sm-2 mb-0">Qui Ut</p>
                              <a
                                 href="product/details.html"
                                 className="font-default"
                              >
                                 <h5>Excepturi Et In Cum</h5>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- category section start --> */}
         <section className="category-section ratio_40">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="title title-2 text-center">
                        <h2>Our Category</h2>
                        <h5 className="text-color">Our collection</h5>
                     </div>
                  </div>
               </div>
               <div className="row gy-3">
                  <div className="col-xxl-2 col-lg-3">
                     <div className="category-wrap category-padding category-block theme-bg-color">
                        <div>
                           <h2 className="light-text">Top</h2>
                           <h2 className="top-spacing">Our Top</h2>
                           <span>Categories</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-10 col-lg-9">
                     <div className="category-wrapper category-slider1 white-arrow category-arrow">
                        <div>
                           <a
                              href="shop-left-sidebar.html"
                              className="category-wrap category-padding"
                           >
                              <img
                                 src="assets/images/fashion/category/1.jpg"
                                 className="bg-img blur-up lazyload"
                                 alt="category image"
                              />
                              <div className="category-content category-text-1">
                                 <h3 className="theme-color">Shoes</h3>
                                 <span className="text-dark">Fashion</span>
                              </div>
                           </a>
                        </div>
                        <div>
                           <a
                              href="shop-left-sidebar.html"
                              className="category-wrap category-padding"
                           >
                              <img
                                 src="assets/images/fashion/category/2.jpg"
                                 className="bg-img blur-up lazyload"
                                 alt="category image"
                              />
                              <div className="category-content category-text-1">
                                 <h3 className="theme-color">Men</h3>
                                 <span className="text-dark">Fashion</span>
                              </div>
                           </a>
                        </div>
                        <div>
                           <a
                              href="shop-left-sidebar.html"
                              className="category-wrap category-padding"
                           >
                              <img
                                 src="assets/images/fashion/category/3.jpg"
                                 className="bg-img blur-up lazyload"
                                 alt="category image"
                              />
                              <div className="category-content category-text-1">
                                 <h3 className="theme-color">Jeans</h3>
                                 <span className="text-dark">Fashion</span>
                              </div>
                           </a>
                        </div>
                        <div>
                           <a
                              href="shop-left-sidebar.html"
                              className="category-wrap category-padding"
                           >
                              <img
                                 src="assets/images/fashion/category/4.jpg"
                                 className="bg-img blur-up lazyload"
                                 alt="category image"
                              />
                              <div className="category-content category-text-1">
                                 <h3 className="theme-color">Jacket</h3>
                                 <span className="text-dark">Fashion</span>
                              </div>
                           </a>
                        </div>
                        <div>
                           <a
                              href="shop-left-sidebar.html"
                              className="category-wrap category-padding"
                           >
                              <img
                                 src="assets/images/fashion/category/3.jpg"
                                 className="bg-img blur-up lazyload"
                                 alt="category image"
                              />
                              <div className="category-content category-text-1">
                                 <h3 className="theme-color">Jeans</h3>
                                 <span className="text-dark">Fashion</span>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- category section end --> */}

         <section className="product-slider overflow-hidden">
            <div>
               <div className="container">
                  <div className="row g-3">
                     <div className="col-lg-4">
                        <div className="title-3 pb-4 title-border">
                           <h2>Most Popular</h2>
                           <h5 className="theme-color">Our Collection</h5>
                        </div>

                        <div className="product-slider round-arrow">
                           <div>
                              <div className="row g-3">
                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/1.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/2.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/3.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/4.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4">
                        <div className="title-3 pb-4 title-border">
                           <h2>Recent Popular</h2>
                           <h5 className="theme-color">Our Collection</h5>
                        </div>

                        <div className="product-slider round-arrow">
                           <div>
                              <div className="row g-3">
                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/1.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/2.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/3.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/4.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4">
                        <div className="title-3 pb-4 title-border">
                           <h2>Most Popular</h2>
                           <h5 className="theme-color">Our Collection</h5>
                        </div>

                        <div className="product-slider round-arrow">
                           <div>
                              <div className="row g-3">
                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/1.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/2.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/3.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="col-lg-12 col-md-6 col-12">
                                    <div className="product-image">
                                       <a href="product/details.html">
                                          <img
                                             src="assets/images/furniture-images/product/4.jpg"
                                             className="blur-up lazyload"
                                             alt=""
                                          />
                                       </a>
                                       <div className="product-details">
                                          <a href="product/details.html">
                                             <h6 className="font-light">
                                                Fully Confirtable
                                             </h6>
                                             <h3>
                                                Latest wood handle chair 7854
                                             </h3>
                                             <h4 className="font-light mt-1">
                                                <del>$49.00</del>{" "}
                                                <span className="theme-color">
                                                   $35.50
                                                </span>
                                             </h4>
                                             <div className="cart-wrap">
                                                <ul>
                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Buy"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         className="addtocart-btn"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#addtocart"
                                                      >
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
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Quick View"
                                                   >
                                                      <a
                                                         href="javascript:void(0)"
                                                         data-bs-toggle="modal"
                                                         data-bs-target="#quick-view"
                                                      >
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
                                                            class="feather feather-eye"
                                                         >
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle
                                                               cx="12"
                                                               cy="12"
                                                               r="3"
                                                            ></circle>
                                                         </svg>
                                                      </a>
                                                   </li>

                                                   <li
                                                      data-bs-toggle="tooltip"
                                                      data-bs-placement="top"
                                                      title="Wishlist"
                                                   >
                                                      <a
                                                         href="wishlist.php"
                                                         className="wishlist"
                                                      >
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
                                                      </a>
                                                   </li>
                                                </ul>
                                             </div>
                                          </a>
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
         </section>

         <section className="ratio_asos overflow-hidden pb-5">
            <div className="px-0 container-fluid p-sm-0">
               <div className="row m-0">
                  <div className="col-12 p-0">
                     <div className="title-3 text-center">
                        <h2>Fashion Top Deals</h2>
                        <h5 className="theme-color">Our Collection</h5>
                     </div>
                  </div>

                  <div className="our-product products-c">
                     <div>
                        <div className="product-box">
                           <div className="img-wrapper">
                              <a href="product/details.html">
                                 <img
                                    src="assets/images/fashion/product/front/25.jpg"
                                    className="w-100 bg-img blur-up lazyload"
                                    alt=""
                                 />
                              </a>
                              <div className="circle-shape"></div>
                              <span className="background-text">Fashion</span>
                              <div className="label-block">
                                 <span className="label label-theme">
                                    30% Off
                                 </span>
                              </div>
                              <div className="cart-wrap">
                                 <ul>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                       >
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
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                       >
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
                                             class="feather feather-eye"
                                          >
                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                             <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                             ></circle>
                                          </svg>
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="wishlist.php"
                                          className="wishlist"
                                       >
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
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-style-3 product-style-chair">
                              <div className="product-title d-block mb-0">
                                 <div className="r-price">
                                    <div className="theme-color">$21</div>
                                    <div className="main-price">
                                       <ul className="rating mb-1 mt-0">
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <p className="font-light mb-sm-2 mb-0">
                                    Multicolor Dress
                                 </p>
                                 <a
                                    href="product/details.html"
                                    className="font-default"
                                 >
                                    <h5>Skater Multicolor Dress</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="product-box">
                           <div className="img-wrapper">
                              <a href="product/details.html">
                                 <img
                                    src="assets/images/fashion/product/front/26.jpg"
                                    className="w-100 bg-img blur-up lazyload"
                                    alt=""
                                 />
                              </a>
                              <div className="circle-shape"></div>
                              <span className="background-text">Fashion</span>
                              <div className="label-block">
                                 <span className="label label-theme">
                                    30% Off
                                 </span>
                              </div>
                              <div className="cart-wrap">
                                 <ul>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                       >
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
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                       >
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
                                             class="feather feather-eye"
                                          >
                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                             <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                             ></circle>
                                          </svg>
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="wishlist.php"
                                          className="wishlist"
                                       >
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
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-style-3 product-style-chair">
                              <div className="product-title d-block mb-0">
                                 <div className="r-price">
                                    <div className="theme-color">$21</div>
                                    <div className="main-price">
                                       <ul className="rating mb-1 mt-0">
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <p className="font-light mb-sm-2 mb-0">
                                    Multicolor Dress
                                 </p>
                                 <a
                                    href="product/details.html"
                                    className="font-default"
                                 >
                                    <h5>Skater Multicolor Dress</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="product-box">
                           <div className="img-wrapper">
                              <a href="product/details.html">
                                 <img
                                    src="assets/images/fashion/product/front/27.jpg"
                                    className="w-100 bg-img blur-up lazyload"
                                    alt=""
                                 />
                              </a>
                              <div className="circle-shape"></div>
                              <span className="background-text">Fashion</span>
                              <div className="label-block">
                                 <span className="label label-theme">
                                    30% Off
                                 </span>
                              </div>
                              <div className="cart-wrap">
                                 <ul>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                       >
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
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                       >
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
                                             class="feather feather-eye"
                                          >
                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                             <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                             ></circle>
                                          </svg>
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="wishlist.php"
                                          className="wishlist"
                                       >
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
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-style-3 product-style-chair">
                              <div className="product-title d-block mb-0">
                                 <div className="r-price">
                                    <div className="theme-color">$21</div>
                                    <div className="main-price">
                                       <ul className="rating mb-1 mt-0">
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <p className="font-light mb-sm-2 mb-0">
                                    Multicolor Dress
                                 </p>
                                 <a
                                    href="product/details.html"
                                    className="font-default"
                                 >
                                    <h5>Skater Multicolor Dress</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="product-box">
                           <div className="img-wrapper">
                              <a href="product/details.html">
                                 <img
                                    src="assets/images/fashion/product/front/28.jpg"
                                    className="w-100 bg-img blur-up lazyload"
                                    alt=""
                                 />
                              </a>
                              <div className="circle-shape"></div>
                              <span className="background-text">Fashion</span>
                              <div className="label-block">
                                 <span className="label label-theme">
                                    30% Off
                                 </span>
                              </div>
                              <div className="cart-wrap">
                                 <ul>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                       >
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
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                       >
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
                                             class="feather feather-eye"
                                          >
                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                             <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                             ></circle>
                                          </svg>
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="wishlist.php"
                                          className="wishlist"
                                       >
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
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-style-3 product-style-chair">
                              <div className="product-title d-block mb-0">
                                 <div className="r-price">
                                    <div className="theme-color">$21</div>
                                    <div className="main-price">
                                       <ul className="rating mb-1 mt-0">
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <p className="font-light mb-sm-2 mb-0">
                                    Multicolor Dress
                                 </p>
                                 <a
                                    href="product/details.html"
                                    className="font-default"
                                 >
                                    <h5>Skater Multicolor Dress</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="product-box">
                           <div className="img-wrapper">
                              <a href="product/details.html">
                                 <img
                                    src="assets/images/fashion/product/front/29.jpg"
                                    className="w-100 bg-img blur-up lazyload"
                                    alt=""
                                 />
                              </a>
                              <div className="circle-shape"></div>
                              <span className="background-text">Fashion</span>
                              <div className="label-block">
                                 <span className="label label-theme">
                                    30% Off
                                 </span>
                              </div>
                              <div className="cart-wrap">
                                 <ul>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                       >
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
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                       >
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
                                             class="feather feather-eye"
                                          >
                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                             <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                             ></circle>
                                          </svg>
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="wishlist.php"
                                          className="wishlist"
                                       >
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
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-style-3 product-style-chair">
                              <div className="product-title d-block mb-0">
                                 <div className="r-price">
                                    <div className="theme-color">$21</div>
                                    <div className="main-price">
                                       <ul className="rating mb-1 mt-0">
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <p className="font-light mb-sm-2 mb-0">
                                    Multicolor Dress
                                 </p>
                                 <a
                                    href="product/details.html"
                                    className="font-default"
                                 >
                                    <h5>Skater Multicolor Dress</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="product-box">
                           <div className="img-wrapper">
                              <a href="product/details.html">
                                 <img
                                    src="assets/images/fashion/product/front/30.jpg"
                                    className="w-100 bg-img blur-up lazyload"
                                    alt=""
                                 />
                              </a>
                              <div className="circle-shape"></div>
                              <span className="background-text">Fashion</span>
                              <div className="label-block">
                                 <span className="label label-theme">
                                    30% Off
                                 </span>
                              </div>
                              <div className="cart-wrap">
                                 <ul>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                       >
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
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                       >
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
                                             class="feather feather-eye"
                                          >
                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                             <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                             ></circle>
                                          </svg>
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="wishlist.php"
                                          className="wishlist"
                                       >
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
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-style-3 product-style-chair">
                              <div className="product-title d-block mb-0">
                                 <div className="r-price">
                                    <div className="theme-color">$21</div>
                                    <div className="main-price">
                                       <ul className="rating mb-1 mt-0">
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <p className="font-light mb-sm-2 mb-0">
                                    Multicolor Dress
                                 </p>
                                 <a
                                    href="product/details.html"
                                    className="font-default"
                                 >
                                    <h5>Skater Multicolor Dress</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="product-box">
                           <div className="img-wrapper">
                              <a href="product/details.html">
                                 <img
                                    src="assets/images/fashion/product/front/31.jpg"
                                    className="w-100 bg-img blur-up lazyload"
                                    alt=""
                                 />
                              </a>
                              <div className="circle-shape"></div>
                              <span className="background-text">Fashion</span>
                              <div className="label-block">
                                 <span className="label label-theme">
                                    30% Off
                                 </span>
                              </div>
                              <div className="cart-wrap">
                                 <ul>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                       >
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
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                       >
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
                                             class="feather feather-eye"
                                          >
                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                             <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                             ></circle>
                                          </svg>
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="wishlist.php"
                                          className="wishlist"
                                       >
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
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-style-3 product-style-chair">
                              <div className="product-title d-block mb-0">
                                 <div className="r-price">
                                    <div className="theme-color">$21</div>
                                    <div className="main-price">
                                       <ul className="rating mb-1 mt-0">
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <p className="font-light mb-sm-2 mb-0">
                                    Multicolor Dress
                                 </p>
                                 <a
                                    href="product/details.html"
                                    className="font-default"
                                 >
                                    <h5>Skater Multicolor Dress</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="product-box">
                           <div className="img-wrapper">
                              <a href="product/details.html">
                                 <img
                                    src="assets/images/fashion/product/front/32.jpg"
                                    className="w-100 bg-img blur-up lazyload"
                                    alt=""
                                 />
                              </a>
                              <div className="circle-shape"></div>
                              <span className="background-text">Fashion</span>
                              <div className="label-block">
                                 <span className="label label-theme">
                                    30% Off
                                 </span>
                              </div>
                              <div className="cart-wrap">
                                 <ul>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          className="addtocart-btn"
                                          data-bs-toggle="modal"
                                          data-bs-target="#addtocart"
                                       >
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
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="javascript:void(0)"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick-view"
                                       >
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
                                             class="feather feather-eye"
                                          >
                                             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                             <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                             ></circle>
                                          </svg>
                                       </a>
                                    </li>
                                    <li>
                                       <a
                                          href="wishlist.php"
                                          className="wishlist"
                                       >
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
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="product-style-3 product-style-chair">
                              <div className="product-title d-block mb-0">
                                 <div className="r-price">
                                    <div className="theme-color">$21</div>
                                    <div className="main-price">
                                       <ul className="rating mb-1 mt-0">
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star theme-color"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                          <li>
                                             <i className="fas fa-star"></i>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <p className="font-light mb-sm-2 mb-0">
                                    Multicolor Dress
                                 </p>
                                 <a
                                    href="product/details.html"
                                    className="font-default"
                                 >
                                    <h5>Skater Multicolor Dress</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div id="qvmodal"></div>

         <Footer></Footer>

         <div className="modal fade newletter-modal" id="newsletter">
            <div className="modal-dialog modal-dialog-centered">
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
                     <img
                        src="assets/images/newletter-icon.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                     />
                     <div className="modal-title">
                        <h2 className="tt-title">
                           Sign up for our Newsletter!
                        </h2>
                        <p className="font-light">
                           Never miss any new updates or products we reveal,
                           stay up to date.
                        </p>
                        <p className="font-light">Oh, and it's free!</p>

                        <div className="input-group mb-3">
                           <input
                              placeholder="Email"
                              className="form-control"
                              type="text"
                           />
                        </div>

                        <div className="cancel-button text-center">
                           <button
                              className="btn default-theme w-100"
                              data-bs-dismiss="modal"
                              type="button"
                           >
                              Submit
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

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
                              <i className="fas fa-check"></i> 3-stripes
                              full-zip hoodie successfully added to you cart.
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
                                 <p className="font-light my-2">
                                    Yellow, Qty : 3
                                 </p>
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

         <div className="tap-to-top">
            <a href="#home">
               <i className="fas fa-chevron-up"></i>
            </a>
         </div>

         <div className="bg-overlay"></div>

         <style>{`
              .h-logo {
                  max-width: 185px !important;
              }
      
              .f-logo {
                  max-width: 220px !important;
              }
      
              @media only screen and (max-width: 600px) {
                  .h-logo {
                      max-width: 110px !important;
                  }
              }
              header .profile-dropdown ul li {
                  display: block;
                  padding: 5px 20px;
                  border-bottom: 1px solid #ddd;
                  line-height: 35px;
              }
      
              header .profile-dropdown ul li:last-child {
                  border-color: #fff;
              }
      
              header .profile-dropdown ul {
                  padding: 10px 0;
                  min-width: 250px;
              }
      
              .name-usr {
                  background: #e87316;
                  padding: 8px 12px;
                  color: #fff;
                  font-weight: bold;
                  text-transform: uppercase;
                  line-height: 24px;
              }
      
              .name-usr span {
                  margin-right: 10px;
              }
      
              @media (max-width:600px) {
                  .h-logo {
                      max-width: 150px !important;
                  }
      
                  i.sidebar-bar {
                      font-size: 22px;
                  }
      
                  .mobile-menu ul li a svg {
                      width: 20px;
                      height: 20px;
                  }
      
                  .mobile-menu ul li a span {
                      margin-top: 0px;
                      font-size: 12px;
                  }
      
                  .name-usr {
                      padding: 5px 12px;
                  }
              }
              .r-price {
                  display: flex;
                  flex-direction: row;
                  gap: 20px;
              }

              .r-price .main-price {
                  width: 100%;
              }

              .r-price .rating { 
                  padding-left: auto;
              }

              .product-box .cart-wrap a{
                  display: block;
              }

              .product-style-3.product-style-chair .product-title {
                  text-align: left;
                  width: 100%;
              }

              @media (max-width:600px) {

                  .product-box p,
                  .product-box a {
                      text-align: left;
                  }

                  .product-style-3.product-style-chair .main-price {
                      text-align: right !important;
                  }
              }
              .products-c .bg-size {
                  background-position: center 0 !important;
              }


              .custom-arrow {
                  position: absolute;
                  bottom: 50px;
                  z-index: 1;
                  -webkit-transition: 0.5s;
                  transition: 0.5s;
                  cursor: pointer;
              }
              .slider-nav .slick-list .slick-slide{
                  width: 100% !important;
                  display: block;
              }
          `}</style>
      </>
   );
}

export default App;
