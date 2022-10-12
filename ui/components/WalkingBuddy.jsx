import { Player } from "@lottiefiles/react-lottie-player";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { RandomPositionContext } from "../shared/context/RandomPositionContext";
import {
  angle,
  getRandomNumber,
  getRandomPosition,
} from "../shared/utils/numbers.util";

const PlayerStyled = styled(Player).attrs((props) => ({
  style: {
    transform:
      props.degrees > 90 && props.degrees < 270
        ? "scale(-1,1) rotate(" + (180 - props.degrees) + "deg)"
        : "rotate(" + props.degrees + "deg)",
  },
}))`
  position: absolute;
  transition: left ${(props) => props.animationTime}s ease-in,
    top ${(props) => props.animationTime}s ease;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  z-index: 1;
`;

const WalkingBuddy = (props) => {
  const componentProps = {
    autoplay: true,
    loop: true,
    src: props.src,
    style: { height: `${props.height}px`, width: `${props.width}px` },
  };

  const { changePosition, setChangePosition } = useContext(
    RandomPositionContext
  );
  const playerRef = useRef();
  const [currentDegrees, setCurrentDegrees] = useState(0);
  const [buddyPosition, setBuddyPosition] = useState({
    left: 0,
    top: 0,
    animationTime: 5,
    degrees: 0,
  });
  let isMousedown = false;

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e; //Position of the cursor
    const { left, top, width, height } =
      playerRef?.current?.container.getBoundingClientRect();
    const anchorX = left + width / 2;
    const anchorY = top + height / 2;

    setCurrentDegrees(angle(clientX, clientY, anchorX, anchorY));

    if (isMousedown) handleDrag(clientX, clientY, width, height);
  };

  const handleDrag = (clientX, clientY, width, height) => {
    setBuddyPosition({
      left: clientX - width / 2,
      top: clientY - height / 2,
      animationTime: 0,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    playerRef.current.container.addEventListener("mousedown", () => {
      isMousedown = true;
    });
    playerRef.current.container.addEventListener("mouseup", () => {
      isMousedown = false;
      setBuddyPosition((current) => ({
        ...current,
        animationTime: getRandomNumber(10, 15),
      }));
    });

    const { randomTop, randomLeft } = getRandomPosition();
    const animationTime = getRandomNumber(10, 15);

    setBuddyPosition({
      top: randomTop,
      left: randomLeft,
      animationTime: animationTime,
    });

    walkingAnimation();
  }, []);

  const walkingAnimation = () => {
    if (!isMousedown) {
      const { randomTop, randomLeft } = getRandomPosition();

      const { left, top, width, height } =
        playerRef?.current?.container.getBoundingClientRect();
      const anchorX = left + width / 2;
      const anchorY = top + height / 2;

      setCurrentDegrees(angle(randomLeft, randomTop, anchorX, anchorY));

      setBuddyPosition((current) => ({
        ...current,
        left: randomLeft,
        top: randomTop,
      }));
    }

    setTimeout(walkingAnimation, (buddyPosition.animationTime + 1.5) * 1000);
  };

  useEffect(() => {
    if (changePosition) {
      const { randomTop, randomLeft } = getRandomPosition();
      const animationTime = getRandomNumber(2, 12);

      setBuddyPosition({
        animationTime: animationTime,
        top: randomTop,
        left: randomLeft,
      });

      setChangePosition(false);
    }
  }, [changePosition, setChangePosition]);

  return (
    <PlayerStyled
      ref={playerRef}
      {...componentProps}
      degrees={currentDegrees}
      left={buddyPosition.left}
      top={buddyPosition.top}
      animationTime={buddyPosition.animationTime}
    />
  );
};

export default WalkingBuddy;
