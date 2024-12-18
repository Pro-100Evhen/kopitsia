import React from "react";
import { useDispatch } from "react-redux";

import {
   addProductToCart,
   remoweProductFromCart,
   minusItemInCartCount,
} from "../../redux/slices/CartSlice";

const CartItem = ({ name, price, imageUrl, id, count }) => {
   const dispatch = useDispatch();
   const handleQuantityChange = (event) => {
      const newCount = parseInt(event.target.value, 10);

      if (newCount > count) {
         dispatch(addProductToCart({ id }));
      } else if (newCount < count) {
         dispatch(minusItemInCartCount({ id }));
      }
   };

   const remoweProductFromCartHendler = () => {
      dispatch(remoweProductFromCart({ id }));
   };
   return (
      <tr>
         <td>
            <div className="cart-prev-img">
               <img
                  src={imageUrl}
                  className="blur-up lazyloaded"
                  alt="productImage"
               />
            </div>
         </td>
         <td>
            <h3>{name}</h3>
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
                     <i className="fas fa-times" />
                  </h2>
               </div>
            </div>
         </td>
         <td>
            <h2>{price}грн</h2>
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
                     value={count}
                  />
               </div>
            </div>
         </td>
         <td>
            <h2 className="td-color">{price * count}грн</h2>
         </td>
         <td>
            <div
               className="remowe-product-from-cart"
               onClick={remoweProductFromCartHendler}
            >
               <i className="fas fa-times" />
            </div>
         </td>
      </tr>
   );
};

export default CartItem;
