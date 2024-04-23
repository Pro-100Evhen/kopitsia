import React from "react";
import { useDispatch } from "react-redux";

import {
   addProductToWishList,
   minusItemInWishListCount,
   remoweProductFromWithList,
} from "../../redux/slices/CartSlice";

const WishlistItem = ({ name, price, imageUrl, id, count }) => {
   const dispatch = useDispatch();
   const handleQuantityChange = (event) => {
      const newCount = parseInt(event.target.value, 10);

      if (newCount > count) {
         dispatch(addProductToWishList({ id }));
      } else if (newCount < count) {
         dispatch(minusItemInWishListCount({ id }));
      }
   };

   const remoweProductFromWishListHendler = () => {
      dispatch(remoweProductFromWithList({ id }));
   };
   return (
      <tr>
         <td>
            <a href="../product/details.html">
               <img
                  src={imageUrl}
                  className="blur-up lazyloaded"
                  alt="productImage"
               />
            </a>
         </td>
         <td>
            <a href="../product/details.html">{name}</a>
            <div className="mobile-cart-content row">
               <div className="col">
                  <div className="qty-box">
                     <div className="input-group">
                        <input
                           type="text"
                           name="quantity"
                           className="form-control input-number"
                           defaultValue={count}
                        />
                     </div>
                  </div>
               </div>
               <div className="col">
                  <h2>${price}</h2>
               </div>
               <div className="col">
                  <h2 className="td-color">
                     <a href="javascript:void(0)">
                        <i className="fas fa-times" />
                     </a>
                  </h2>
               </div>
            </div>
         </td>
         <td>
            <h2>${price}</h2>
         </td>
         <td>
            <div className="qty-box">
               <div className="input-group">
                  <input
                     onChange={handleQuantityChange}
                     type="number"
                     name="quantity"
                     data-rowid="ba02b0dddb000b25445168300c65386d"
                     className="form-control input-number"
                     defaultValue={count}
                     value={count}
                  />
               </div>
            </div>
         </td>
         <td>
            <h2 className="td-color">${price * count}</h2>
         </td>
         <td>
            <div
               className="remowe-product-from-cart"
               onClick={remoweProductFromWishListHendler}
            >
               <i className="fas fa-times" />
            </div>
         </td>
      </tr>
   );
};

export default WishlistItem;
