import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = (props) => {
   return (
      <div className="col-xl-2 col-lg-2 col-6">
         <ContentLoader
            speed={2}
            width={224}
            height={330}
            viewBox="0 0 224 330"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
         >
            <rect x="5" y="5" rx="10" ry="10" width="200" height="235" />
            <rect x="5" y="300" rx="5" ry="5" width="200" height="25" />
            <rect x="5" y="243" rx="5" ry="5" width="104" height="25" />
            <rect x="6" y="272" rx="5" ry="5" width="126" height="25" />
         </ContentLoader>
      </div>
   );
};

export default Sceleton;
