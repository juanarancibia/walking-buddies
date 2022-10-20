import ReactTooltip from "react-tooltip";

const Title = () => {
  return (
    <>
      <p
        style={{
          marginTop: "10rem",
        }}
      >
        <span
          style={{
            color: "#45ff3f",
            fontWeight: 200,
            fontSize: "4rem",
            textShadow: "0.025em 0.025em 0 #2f7b2d, 0.05em 0.05em 0 #1e511c",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif",
            zIndex: "3",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          WALKING BUDDIES
        </span>
        <a
          data-tip="React-tooltip"
          style={{
            color: "#ff6b3f",
            fontWeight: 200,
            marginLeft: "1rem",
            fontSize: "1rem",
            textShadow: "none",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif",
            zIndex: "3",
            border: "1px solid #ff6b3f",
            borderRadius: "50%",
            padding: "0 0.3em",
          }}
        >
          ?
        </a>
      </p>
      <ReactTooltip clickable={true} place="bottom" type="dark" effect="solid">
        <p
          style={{
            color: "#ff6b3f",
            fontWeight: "500",
            fontSize: "1rem",
            fontFamily: "Verdana, Arial, Helvetica, sans-serif",
          }}
        >
          Get some GoerliEth to start using it, to get some go to: <br />
          https://goerli-faucet.slock.it/ or https://goerlifaucet.com/ <br />
          <br />
          Then connect your Metamask wallet and change your network to Goerli
          Testnet <br />
          <br /> You are ready to mint some buddies!
        </p>
      </ReactTooltip>
    </>
  );
};

export default Title;
