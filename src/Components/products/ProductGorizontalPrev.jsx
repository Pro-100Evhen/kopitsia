import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
   addProductToCart,
   addProductToWishList,
} from "../../redux/slices/CartSlice";

const ProductGorizontalPrev = (props) => {
   const dispatch = useDispatch();
   const itemCountInCart = useSelector(
      (state) =>
         state.cart.items.find((product) => product.id === props.id)?.count || 0
   );

   const onClickAddToCart = (event) => {
      event.preventDefault();
      const item = {
         imageUrl: props.imageUrl,
         categories: props.categories,
         name: props.name,
         price: props.price,
         id: props.id,
      };

      dispatch(addProductToCart(item));

      toast.success(
         `${props.name} успішно доданий до кошика [${itemCountInCart + 1} шт]`
      );
   };

   const wishListItemCount = useSelector(
      (state) =>
         state.cart.withListItems.find((product) => product.id === props.id)
            ?.count || 0
   );

   const onClickAddToWishList = (event) => {
      event.preventDefault();
      const item = {
         imageUrl: props.imageUrl,
         categories: props.categories,
         name: props.name,
         price: props.price,
         id: props.id,
      };

      dispatch(addProductToWishList(item));
      toast.info(
         `${props.name} успішно доданий до списку бажань [${
            wishListItemCount + 1
         } шт]`
      );
   };
   return (
      <div className="col-lg-12 col-md-6 col-12">
         <div className="product-image">
            <div>
               <img
                  src={props.imageUrl}
                  className="blur-up lazyload"
                  alt="product"
               />
            </div>
            <div className="product-details">
               <div>
                  <h6 className="font-light">{props.category}</h6>
                  <h3>{props.name}</h3>
                  <h4 className="font-light mt-1">
                     {/* <del>$49.00</del>{" "} */}
                     <span className="theme-color">{props.price} грн</span>
                  </h4>
                  <div className="cart-wrap">
                     <ul>
                        <li
                           onClick={onClickAddToCart}
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

                        {/* <li
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

                        <li
                           data-bs-toggle="tooltip"
                           data-bs-placement="top"
                           title="Wishlist"
                           onClick={onClickAddToWishList}
                        >
                           <a href="wishlist.php" className="wishlist">
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
            </div>
         </div>
      </div>
   );
};

export default ProductGorizontalPrev;
