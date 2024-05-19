import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

function HeroSliderNextArrow(props) {
   const { onClick } = props;
   return (
      <div onClick={onClick} className="custom-arrow next">
         {/* <span>Наст</span> */}
         <i className="fas fa-chevron-right ms-3"></i>
      </div>
   );
}

function HeroSliderPrevArrow(props) {
   const { onClick } = props;
   return (
      <div onClick={onClick} className="custom-arrow prev">
         <i className="fas fa-chevron-left me-3"></i>
         {/* <span>Попер</span> */}
      </div>
   );
}

const HeroSlider = () => {
   var sliderFor = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      // asNavFor: ".slider-nav",
      nextArrow: <HeroSliderNextArrow />,
      prevArrow: <HeroSliderPrevArrow />,
   };
   var sliderNav = {
      slidesToShow: 3,
      slidesToScroll: 1,
      verticalSwiping: true,
      infinite: true,
      // asNavFor: ".slider-for",
      // dots: true,
      focusOnSelect: true,
      vertical: true,
   };
   const [nav1, setNav1] = useState(null);
   const [nav2, setNav2] = useState(null);
   let sliderRef1 = useRef(null);
   let sliderRef2 = useRef(null);

   useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
   }, []);

   return (
      <section className="pt-0 poster-section">
         <Slider
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
            {...sliderFor}
            className="poster-image slider-for custome-arrow classNameic-arrow"
         >
            <div>
               <img
                  src="assets/images/HeroSlider/heroSlide1.png"
                  className="img-fluid blur-up lazyload"
                  alt="main-full-1"
               />
            </div>
            <div>
               <img
                  src="assets/images/HeroSlider/heroSlide2.png"
                  className="img-fluid blur-up lazyload"
                  alt="main-full-2"
               />
            </div>
            <div>
               <img
                  src="assets/images/HeroSlider/heroSlide3.png"
                  className="img-fluid blur-up lazyload"
                  alt="main-full-3"
               />
            </div>
            <div>
               <img
                  src="assets/images/HeroSlider/heroSlide4.png"
                  className="img-fluid blur-up lazyload"
                  alt="main-full-4"
               />
            </div>
            <div>
               <img
                  src="assets/images/HeroSlider/heroSlide5.png"
                  className="img-fluid blur-up lazyload"
                  alt="main-full-5"
               />
            </div>
         </Slider>

         <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            {...sliderNav}
            className="slider-nav image-show"
         >
            <div>
               <div className="poster-img">
                  <img
                     src="assets/images/HeroSlider/heroSlide1.png"
                     className="img-fluid blur-up lazyload"
                     alt=""
                  />
               </div>
            </div>
            <div>
               <div className="poster-img">
                  <img
                     src="assets/images/HeroSlider/heroSlide2.png"
                     className="img-fluid blur-up lazyload"
                     alt=""
                  />
               </div>
            </div>
            <div>
               <div className="poster-img">
                  <img
                     src="assets/images/HeroSlider/heroSlide3.png"
                     className="img-fluid blur-up lazyload"
                     alt=""
                  />
               </div>
            </div>
            <div>
               <div className="poster-img">
                  <img
                     src="assets/images/HeroSlider/heroSlide4.png"
                     className="img-fluid blur-up lazyload"
                     alt=""
                  />
               </div>
            </div>
            <div>
               <div className="poster-img">
                  <img
                     src="assets/images/HeroSlider/heroSlide5.png"
                     className="img-fluid blur-up lazyload"
                     alt=""
                  />
               </div>
            </div>
         </Slider>

         <div className="left-side-contain">
            <div className="banner-left">
               {/* <h4>
                  Sale <span className="theme-color">35% Off</span>
               </h4> */}
               <h1>
                  Найкрутіші <span>плюшеві іграшки</span>
               </h1>
               <p>
                  Купуй одну, для{" "}
                  <span className="theme-color">початку колекції</span>
               </p>
               <h2>600грн </h2>
               <p className="poster-details mb-0">
                  Дитячі іграшки з штучного хутра, тканини і набивного
                  матеріалів.
               </p>
            </div>
         </div>

         {/* <div className="right-side-contain">
            <div className="social-image">
               <h6>Facebook</h6>
            </div>

            <div className="social-image">
               <h6>Instagram</h6>
            </div>

            <div className="social-image">
               <h6>Twitter</h6>
            </div>
         </div> */}
      </section>
   );
};

export default HeroSlider;
