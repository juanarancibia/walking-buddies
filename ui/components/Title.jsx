const Title = ({ className, children }) => {
  return (
    <h1
      style={{
        color: "#45ff3f",
        fontWeight: 200,
        fontSize: "4rem",
        textShadow: "0.025em 0.025em 0 #2f7b2d, 0.05em 0.05em 0 #1e511c",
        fontFamily: "Verdana, Arial, Helvetica, sans-serif",
        zIndex: "3",
        marginTop: "10rem",
        textAlign: "center",
        userSelect: "none",
      }}
    >
      WALKING BUDDIES
    </h1>
  );
};

export default Title;
