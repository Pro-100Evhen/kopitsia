import React from "react";
import { SiTelegram } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";
import { FaGithub, FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="footer-sm-space mt-5">
         <div className="main-footer">
            <div className="container">
               <div className="row gy-4">
                  <div className="footer-info__conteiner">
                     <h3>
                        Розроблено в якості пет проєкту студентом НФК НУБіП
                        України, групи кн-201, Назаренком Є.В.
                     </h3>

                     <h5 className="footer-info__contacts-title">
                        Доступні контакти:
                     </h5>
                     <ul className="footer-info__contacts-list">
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <SiTelegram />
                              Telegram:
                           </span>
                           <span className="footer-info__contact-value">
                              @Faara_on
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <FaPhone />
                              Phone:
                           </span>
                           <span className="footer-info__contact-value">
                              +380 99 452 49 23
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <FaGithub />
                              Github:
                           </span>
                           <span className="footer-info__contact-value">
                              https://github.com/Pro-100Evhen
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <IoMdMailUnread />
                              email:
                           </span>
                           <span className="footer-info__contact-value">
                              zenanazarenko652@gmail.com
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <FaLinkedin />
                              Linkedin:
                           </span>
                           <span className="footer-info__contact-value">
                              https://www.linkedin.com/in/yevhen-nazarenko-b2b731266/
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <SiTelegram />
                              Freelancehunt:
                           </span>
                           <span className="footer-info__contact-value">
                              https://freelancehunt.com/freelancer/Yevhen1215.html
                           </span>
                        </li>
                     </ul>
                     <h3>З гордістю зроблено в Україні 🇺🇦</h3>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};
export default Footer;
