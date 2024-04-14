import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   addProductToCart,
   addProductToWishList,
} from "../../redux/slices/CartSlice";
import { toast } from "react-toastify";

const ProductsPrev = ({ imageUrl, categories, name, price, id }) => {
   const dispatch = useDispatch();
   const itemCountInCart = useSelector(
      (state) =>
         state.cart.items.find((product) => product.id === id)?.count || 0
   );

   const onClickAddToCart = (event) => {
      event.preventDefault();
      const item = {
         imageUrl,
         categories,
         name,
         price,
         id,
      };

      dispatch(addProductToCart(item));

      toast.success(
         `${name} успішно доданий до кошика [${itemCountInCart + 1} шт]`
      );
   };

   const wishListItemCount = useSelector(
      (state) =>
         state.cart.withListItems.find((product) => product.id === id)?.count ||
         0
   );

   const onClickAddToWishList = (event) => {
      event.preventDefault();
      const item = {
         imageUrl,
         categories,
         name,
         price,
         id,
      };

      dispatch(addProductToWishList(item));
      toast.success(
         `${name} успішно доданий до списку бажань [${
            wishListItemCount + 1
         } шт]`
      );
   };

   return (
      <div className="col-xl-2 col-lg-2 col-6">
         <div className="product-box">
            <div className="img-wrapper">
               <a href="product/details.html">
                  <img
                     src={imageUrl}
                     className="w-100 bg-img blur-up lazyload"
                     alt="productPhoto"
                  />
               </a>
               <div className="circle-shape"></div>
               <span className="background-text">Kopitsia</span>
               <div className="label-block">
                  {/* <span className="label label-theme">30% Off</span> */}
               </div>
               <div className="cart-wrap">
                  <ul>
                     <li>
                        <a onClick={onClickAddToCart} className="addtocart-btn">
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
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                           </svg>
                        </a>
                     </li>

                     {/* Переглянути сторінку товару, наступний спрінт */}
                     {/* <li>
                        <a href="">
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
                              className="feather feather-eye"
                           >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                           </svg>
                        </a>
                     </li> */}
                     <li>
                        <a
                           href=""
                           onClick={onClickAddToWishList}
                           className="wishlist"
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
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="product-style-3 product-style-chair">
               <div className="product-title d-block mb-0">
                  <div className="r-price">
                     <div className="theme-color">{price} грн</div>
                     {/* <div className="main-price">
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
                     </div> */}
                  </div>
                  <p className="font-light mb-sm-2 mb-0">{categories}</p>
                  <a href="product/details.html" className="font-default">
                     <h5>{name}</h5>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductsPrev;
