import { useContext, useEffect, useState } from "react";
import { BuddiesUpdatedContext } from "../shared/context/BuddiesUpdatedContext";
import { getBuddies } from "../shared/service/contract";
import ControlButtons from "./ControlButtons";
import WalkingBuddy from "./WalkingBuddy";

const BuddiesContainer = (props) => {
  const [buddies, setBuddies] = useState([]);
  const { buddiesUpdated, setBuddiesUpdated } = useContext(
    BuddiesUpdatedContext
  );

  const updateBuddies = () => {
    getBuddies().then((buds) => {
      const mappedBuddies =
        buds?.map((b) => ({
          id: b.tokenId.toNumber(),
          src: b.tokenURI,
          height: "150",
          width: "150",
        })) || [];

      setBuddies(mappedBuddies);
    });
  };

  useEffect(() => {
    updateBuddies();

    window.ethereum?.on("accountsChanged", () => {
      updateBuddies();
    });
  }, [buddiesUpdated]);

  return (
    <>
      {buddies.map((bud) => (
        <WalkingBuddy
          key={bud.id}
          height={bud.height}
          width={bud.width}
          src={bud.src}
        />
      ))}
      <ControlButtons handleModalOpen={props.handleModalOpen} />
    </>
  );
};

export default BuddiesContainer;
