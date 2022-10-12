import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  position: relative;
  z-index: 3;
  cursor: pointer;
`;

const ButtonImage = (props) => {
  const handleClick = () => {
    props.handleClick();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 0, transition: 1 }}
      whileTap={{ scale: 0.8, transition: 1 }}
      style={{ marginTop: "5rem" }}
      onClick={handleClick}
    >
      <StyledImage
        src={props.icon}
        alt={`${props.alt}`}
        width={`${props.width}px`}
        height={`${props.height}px`}
      />
    </motion.div>
  );
};

export default ButtonImage;
