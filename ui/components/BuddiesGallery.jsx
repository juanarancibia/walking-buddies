import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const buddies = [
  {
    id: 1,
    height: "150",
    width: "150",
    src: "https://assets7.lottiefiles.com/packages/lf20_dkownj0k.json",
  },

  {
    id: 2,
    height: "150",
    width: "150",
    src: "https://lottie.host/d2b80613-4067-44a3-8fc4-aad7811f1ebe/UmmvphCMPA.json",
  },
  {
    id: 3,
    height: "150",
    width: "150",
    src: "https://lottie.host/f17b5454-8e4d-4034-97de-63812eb6731e/VPg8OKDypl.json",
  },
  {
    id: 4,
    height: "150",
    width: "150",
    src: "https://lottie.host/adf66eca-b007-4790-a644-7b6866a0df49/nUGffiaTLO.json",
  },
  {
    id: 5,
    height: "150",
    width: "150",
    src: "https://lottie.host/4553c565-e4ab-494e-886e-4c9c037243bd/ADibWFZAnx.json",
  },
  {
    id: 6,
    height: "150",
    width: "150",
    src: "https://lottie.host/b6847300-1f95-4b31-b01d-2c1c5fad133d/bmmjH7g85n.json",
  },
];

const BuddiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 1rem 0;
`;

const StyledH1 = styled.h1`
  color: #ff6c3f;
  font-weight: 700;
  font-size: 2rem;
`;

const MintBuddyButton = motion(styled.button`
  width: 85%;
  background-color: #ff6c3f;
  color: white;
  border: 0;
  border-radius: 2px;
  font-weight: 500;
  font-size: 1.5rem;
  margin: 1rem 0;
  padding: 0.5rem 0;
  filter: ${(props) => (props.hasSelectedBuddy ? "" : "brightness(50%)")};
  cursor: ${(props) => (props.hasSelectedBuddy ? "pointer" : "not-allowed")};
`);

const StyledPlayer = styled(Player)`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  scale: ${(props) => (props.selectedBuddy ? 1.3 : "")};
`;

const BuddiesGallery = () => {
  const [selectedBuddy, setSelectedBuddy] = useState({});

  const handleSelect = (buddy) => {
    setSelectedBuddy(buddy.id == selectedBuddy.id ? {} : buddy);
  };

  return (
    <>
      <StyledH1>Buddies gallery</StyledH1>
      <BuddiesContainer>
        {buddies.map((buddy) => (
          <motion.div
            key={`motiondiv${buddy.id}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ opacity: 0.4 }}
            onClick={() => handleSelect(buddy)}
            style={{
              background: `${
                selectedBuddy.id == buddy.id ? "#d5d5d5" : "transparent"
              }`,
              borderRadius: "50%",
            }}
          >
            <StyledPlayer
              key={buddy.id}
              src={buddy.src}
              width={buddy.width}
              height={buddy.height}
              selectedBuddy={selectedBuddy.id == buddy.id}
              autoplay
              loop
            />
          </motion.div>
        ))}
      </BuddiesContainer>
      <MintBuddyButton
        whileHover={{ scale: selectedBuddy.id ? 1.05 : 1 }}
        whileTap={{ scale: selectedBuddy.id ? 0.95 : 1 }}
        hasSelectedBuddy={selectedBuddy.id}
      >
        Mint It!
      </MintBuddyButton>
    </>
  );
};

export default BuddiesGallery;
