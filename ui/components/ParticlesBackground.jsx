import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        color: "#9eff76",
        number: {
          value: 125,
        },
        size: {
          value: 2,
        },
        move: {
          enable: true,
          direction: "none",
          random: true,
          speed: 1.5,
          straight: true,
        },
        shape: {
          type: "circle",
        },
        links: {
          color: {
            value: "#9eff76",
          },
          distance: 150,
          frequency: 0.35,
          enable: true,
          width: 2,
        },
      },
      background: {
        color: "#0000",
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesBackground;
