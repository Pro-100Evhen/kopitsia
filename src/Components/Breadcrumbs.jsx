import React from "react";

const Breadcrumbs = ({ title }) => {
   return (
      <>
         <section
            className="breadcrumb-section section-b-space"
            style={{ paddingTop: 20, paddingBottom: 20 }}
         >
            <ul className="circles">
               <li />
               <li />
               <li />
               <li />
               <li />
               <li />
               <li />
               <li />
               <li />
               <li />
            </ul>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <h3>{title}</h3>
                     <nav>
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item">
                              <a href="index.htm">
                                 <i className="fas fa-home" />
                              </a>
                           </li>
                           <li
                              className="breadcrumb-item active"
                              aria-current="page"
                           >
                              {title}
                           </li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Breadcrumbs;
