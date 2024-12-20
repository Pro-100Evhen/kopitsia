import React from "react";
import ShopSidebarFilters from "./ShopSidebarFilters";
import ShopProductsOutput from "./ShopProductsOutput";
const ShopPageContent = (props) => {
   return (
      <section class="section-b-space">
         <div class="container">
            <div class="row">
               <ShopSidebarFilters />

               <ShopProductsOutput props={props} />
            </div>
         </div>
      </section>
   );
};

export default ShopPageContent;
