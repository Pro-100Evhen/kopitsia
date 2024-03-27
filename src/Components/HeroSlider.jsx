import React from "react";

const HeroSlider = () => {
   return (
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
   );
};

export default HeroSlider;
