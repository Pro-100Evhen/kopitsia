import React from "react";
import ShopSidebarFilters from "./ShopSidebarFilters";
import ShopProductsOutput from "./ShopProductsOutput";
const ShopPageContent = (props) => {
   return (
      <section className="section-b-space">
         <div className="container">
            <div className="row">
               <ShopSidebarFilters />

               <ShopProductsOutput props={props} />
            </div>
         </div>
      </section>
   );
};

export default ShopPageContent;
