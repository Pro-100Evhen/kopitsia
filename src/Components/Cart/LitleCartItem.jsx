import React from "react";
import { useDispatch } from "react-redux";
import {
   addProductToCart,
   minusItemInCartCount,
} from "../../redux/slices/CartSlice";

const LitleCartItem = (props) => {
   const dispatch = useDispatch();
   const handleQuantityChange = (event) => {
      const newCount = parseInt(event.target.value, 10);

      if (newCount > props.count) {
         dispatch(addProductToCart({ id: props.id }));
      } else if (newCount < props.count) {
         dispatch(minusItemInCartCount({ id: props.id }));
      }
   };
   return (
      <li>
         <div className="media">
            <img
               src={props.imageUrl}
               className="img-fluid blur-up lazyloaded"
               alt="product"
            />
            <div className="media-body">
               <h6>{props.name}</h6>
               <div className="qty-with-price">
                  <span>{props.price * props.count} грн</span>
                  <span>
                     <input
                        type="number"
                        onChange={handleQuantityChange}
                        className="form-control"
                        value={props.count}
                        // defaultValue={props.count}
                     />
                  </span>
               </div>
            </div>
            <button
               type="button"
               className="btn-close d-block d-md-none"
               aria-label="Close"
            >
               <i className="fas fa-times" />
            </button>
         </div>
      </li>
   );
};

export default LitleCartItem;
