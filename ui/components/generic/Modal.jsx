import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ children, handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          width: "27rem",
          height: "auto",
          background: "#efefef",
          margin: "auto",
          padding: "0 1rem",
          borderRadius: "2px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 11,
        }}
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
