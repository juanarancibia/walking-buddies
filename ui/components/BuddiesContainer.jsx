import { useEffect } from "react";
import { RandomPositionContextProvider } from "../shared/context/RandomPositionContext";
import ControlButtons from "./ControlButtons";
import WalkingBuddy from "./WalkingBuddy";

const BuddiesContainer = (props) => {
  useEffect(() => {}, []);

  return (
    <RandomPositionContextProvider>
      <WalkingBuddy
        height="150"
        width="150"
        src="https://assets7.lottiefiles.com/packages/lf20_dkownj0k.json"
      />
      <ControlButtons handleModalOpen={props.handleModalOpen} />
    </RandomPositionContextProvider>
  );
};

export default BuddiesContainer;
