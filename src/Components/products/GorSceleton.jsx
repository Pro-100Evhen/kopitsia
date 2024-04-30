import React from "react";
import ContentLoader from "react-content-loader";

const GorSceleton = (props) => {
   return (
      <div className="col-lg-12 col-md-6 col-12">
         <ContentLoader
            speed={2}
            width={420}
            height={92}
            viewBox="0 0 420 92"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
         >
            <rect x="5" y="5" rx="10" ry="10" width="80" height="90" />
            <rect x="231" y="19" rx="0" ry="0" width="22" height="2" />
            <rect x="90" y="8" rx="5" ry="5" width="310" height="17" />
            <rect x="90" y="35" rx="5" ry="5" width="170" height="20" />
            <rect x="90" y="65" rx="5" ry="5" width="100" height="16" />
         </ContentLoader>
      </div>
   );
};

export default GorSceleton;
