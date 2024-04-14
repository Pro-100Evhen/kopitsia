import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = () => {
   return (
      <ToastContainer
         position="bottom-right"
         pauseOnHover
         theme="colored"
         autoClose={3000}
      />
   );
};

export default Message;
