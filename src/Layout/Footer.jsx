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
                     <h3>
                        Розроблено в якості пет-проєкту студентом НФК НУБіП
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
                              <a href="https://t.me/Faara_on">@Faara_on</a>
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <FaPhone />
                              Phone:
                           </span>
                           <span className="footer-info__contact-value">
                              <a href="tel:+380994524923">+380 99 452 49 23</a>
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <FaGithub />
                              Github:
                           </span>
                           <span className="footer-info__contact-value">
                              <a href="https://github.com/Pro-100Evhen">
                                 https://github.com/Pro-100Evhen
                              </a>
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <IoMdMailUnread />
                              email:
                           </span>
                           <span className="footer-info__contact-value">
                              <a href="email:zenanazarenko652@gmail.com">
                                 zenanazarenko652@gmail.com
                              </a>
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <FaLinkedin />
                              Linkedin:
                           </span>
                           <span className="footer-info__contact-value">
                              <a href="https://www.linkedin.com/in/yevhen-nazarenko-b2b731266/">
                                 https://www.linkedin.com/in/yevhen-nazarenko-b2b731266/
                              </a>
                           </span>
                        </li>
                        <li className="footer-info__contact-li">
                           <span className="footer-info__contact-source">
                              <FaFreeCodeCamp />
                              Freelancehunt:
                           </span>
                           <span className="footer-info__contact-value">
                              <a href="https://freelancehunt.com/freelancer/Yevhen1215.html">
                                 https://freelancehunt.com/freelancer/Yevhen1215.html
                              </a>
                           </span>
                        </li>
                     </ul>
                     <h3 className="footer-info__made-in-ua">
                        З гордістю зроблено в Україні 🇺🇦
                     </h3>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};
export default Footer;
