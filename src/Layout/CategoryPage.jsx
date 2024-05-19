import React from "react";
import TopProductColumn from "../Components/TopProductColumn";
import Breadcrumbs from "../Components/Breadcrumbs";

const CategoryPage = () => {
   return (
      <div>
         <Breadcrumbs title="Категорії товарів" />
         <TopProductColumn />
      </div>
   );
};

export default CategoryPage;
