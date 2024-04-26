import React from "react";

const ThankYou = () => {
   return (
      <>
         {/* Order Success Section Start */}
         <section className="pt-0">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12 p-0">
                     <div className="success-icon">
                        <div className="main-container">
                           <div className="check-container">
                              <div className="check-background">
                                 <svg
                                    viewBox="0 0 65 51"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M7 25L27.3077 44L58.5 7"
                                       stroke="white"
                                       strokeWidth={13}
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    />
                                 </svg>
                              </div>
                              <div className="check-shadow" />
                           </div>
                        </div>
                        <div className="success-contain">
                           <h4>Order Success</h4>
                           <h5 className="font-light">
                              Payment Is Successfully Processsed And Your Order
                              Is On The Way
                           </h5>
                           <h6 className="font-light">
                              Transaction ID:267676GHERT105467
                           </h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Order Success Section End */}

         {/* Oder Details Section Start */}
         {/* <section className="section-b-space cart-section order-details-table">
            <div className="container">
               <div className="title title1 title-effect mb-1 title-left">
                  <h2 className="mb-3">Order Details</h2>
               </div>
               <div className="row g-4">
                  <div className="col-md-6">
                     <div className="col-sm-12 table-responsive">
                        <table className="table cart-table table-borderless">
                           <tbody>
                              <tr className="table-order">
                                 <td>
                                    <a href="javascript:void(0)">
                                       <img
                                          src="assets/images/fashion/product/front/1.jpg"
                                          className="img-fluid blur-up lazyload"
                                          alt
                                       />
                                    </a>
                                 </td>
                                 <td>
                                    <p>Product Name</p>
                                    <h5>Outwear &amp; Coats</h5>
                                 </td>
                                 <td>
                                    <p>Quantity</p>
                                    <h5>1</h5>
                                 </td>
                                 <td>
                                    <p>Price</p>
                                    <h5>$63.54</h5>
                                 </td>
                              </tr>
                              <tr className="table-order">
                                 <td>
                                    <a href="javascript:void(0)">
                                       <img
                                          src="assets/images/fashion/product/front/2.jpg"
                                          className="img-fluid blur-up lazyload"
                                          alt
                                       />
                                    </a>
                                 </td>
                                 <td>
                                    <p className="font-light">Product Name</p>
                                    <h5>Jacket &amp; Cap</h5>
                                 </td>
                                 <td>
                                    <p className="font-light">Quantity</p>
                                    <h5>5</h5>
                                 </td>
                                 <td>
                                    <p className="font-light">Price</p>
                                    <h5>$57.10</h5>
                                 </td>
                              </tr>
                              <tr className="table-order">
                                 <td>
                                    <a href="javascript:void(0)">
                                       <img
                                          src="assets/images/fashion/product/front/3.jpg"
                                          className="img-fluid blur-up lazyload"
                                          alt
                                       />
                                    </a>
                                 </td>
                                 <td>
                                    <p className="font-light">Product Name</p>
                                    <h5>New Fashion</h5>
                                 </td>
                                 <td>
                                    <p className="font-light">Quantity</p>
                                    <h5>1</h5>
                                 </td>
                                 <td>
                                    <p className="font-light">Price</p>
                                    <h5>$63.25</h5>
                                 </td>
                              </tr>
                           </tbody>
                           <tfoot>
                              <tr className="table-order">
                                 <td colSpan={3}>
                                    <h5 className="font-light">Subtotal :</h5>
                                 </td>
                                 <td>
                                    <h4>$55.00</h4>
                                 </td>
                              </tr>
                              <tr className="table-order">
                                 <td colSpan={3}>
                                    <h5 className="font-light">Shipping :</h5>
                                 </td>
                                 <td>
                                    <h4>$12.00</h4>
                                 </td>
                              </tr>
                              <tr className="table-order">
                                 <td colSpan={3}>
                                    <h5 className="font-light">Tax(GST) :</h5>
                                 </td>
                                 <td>
                                    <h4>$10.00</h4>
                                 </td>
                              </tr>
                              <tr className="table-order">
                                 <td colSpan={3}>
                                    <h4 className="theme-color fw-bold">
                                       Total Price :
                                    </h4>
                                 </td>
                                 <td>
                                    <h4 className="theme-color fw-bold">
                                       $6935.00
                                    </h4>
                                 </td>
                              </tr>
                           </tfoot>
                        </table>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="order-success">
                        <div className="row g-4">
                           <div className="col-sm-6">
                              <h4>summery</h4>
                              <ul className="order-details">
                                 <li>Order ID: 5563853658932</li>
                                 <li>Order Date: October 22, 2018</li>
                                 <li>Order Total: $907.28</li>
                              </ul>
                           </div>
                           <div className="col-sm-6">
                              <h4>shipping address</h4>
                              <ul className="order-details">
                                 <li>Gerg Harvell</li>
                                 <li>568, Suite Ave.</li>
                                 <li>
                                    Austrlia, 235153 Contact No. 48465465465
                                 </li>
                              </ul>
                           </div>
                           <div className="col-12">
                              <div className="payment-mode">
                                 <h4>payment method</h4>
                                 <p>
                                    Pay on Delivery (Cash/Card). Cash on
                                    delivery (COD) available. Card/Net banking
                                    acceptance subject to device availability.
                                 </p>
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="delivery-sec">
                                 <h3>
                                    expected date of delivery:{" "}
                                    <span>october 22, 2018</span>
                                 </h3>
                                 <a href="order-tracking.php">track order</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}
         {/* Order Details Section End */}
      </>
   );
};

export default ThankYou;
