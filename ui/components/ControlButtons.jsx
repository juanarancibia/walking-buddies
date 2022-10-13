import AddBuddyIcon from "../assets/icons/add-buddy.png";
import WalletIcon from "../assets/icons/ewallet.png";
import useMetaMask from "../shared/hooks/useMetaMask";
import ButtonImage from "./generic/ButtonImage";

const ControlButtons = (props) => {
  const { connect } = useMetaMask();

  return (
    <div
      style={{
        display: "flex",
        gap: "5rem",
        marginTop: "13rem",
      }}
    >
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
    </div>
  );
};

export default ControlButtons;
