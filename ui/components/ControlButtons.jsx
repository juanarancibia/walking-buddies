import WalletIcon from "../assets/icons/ewallet.png";
import AddBuddyIcon from "../assets/icons/add-buddy.png";
import useMetaMask from "../shared/hooks/useMetaMask";
import ButtonImage from "./generic/ButtonImage";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  gap: 5rem;
`;

const ControlButtons = (props) => {
  const { connect } = useMetaMask();

  return (
    <ButtonsContainer>
      <ButtonImage
        icon={AddBuddyIcon}
        alt="add buddy"
        width="75"
        height="75"
        handleClick={props.handleModalOpen}
      />
      <ButtonImage
        icon={WalletIcon}
        alt="connect wallet"
        width="75"
        height="75"
        handleClick={connect}
      />
    </ButtonsContainer>
  );
};

export default ControlButtons;
