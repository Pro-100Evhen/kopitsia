import React from "react";

const ProductCategorys = () => {
   return (
      <section className="category-section ratio_40">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-12">
                  <div className="title title-2 text-center">
                     <h2>Наша іграшки</h2>
                     <h5 className="text-color">Наші колекції</h5>
                  </div>
               </div>
            </div>
            <div className="row gy-3">
               <div className="col-xxl-2 col-lg-3">
                  <div className="category-wrap category-padding category-block theme-bg-color">
                     <div>
                        <h2 className="top-spacing">Найкращі</h2>
                        <span>Категорії</span>
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
   );
};

export default ProductCategorys;
