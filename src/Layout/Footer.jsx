import React from "react";
import { SiTelegram } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";
import { FaGithub, FaPhone } from "react-icons/fa6";
import { FaLinkedin, FaFreeCodeCamp } from "react-icons/fa";
import Message from "../Components/Messages/Message";

const Footer = () => {
   return (
      <footer className="footer-sm-space mt-5">
         <Message />
         <div className="main-footer">
            <div className="container">
               <div className="row gy-4">
                  <div className="footer-info__conteiner">
                     <h3>Копірайт © 2025 | Всі права захищені</h3>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};
export default Footer;
