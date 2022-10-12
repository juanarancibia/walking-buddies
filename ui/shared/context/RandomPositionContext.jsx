import React, { useState } from "react";

export const RandomPositionContext = React.createContext();

export const RandomPositionContextProvider = ({ children }) => {
  const [changePosition, setChangePosition] = useState(false);

  return (
    <RandomPositionContext.Provider
      value={{
        changePosition,
        setChangePosition,
      }}
    >
      {children}
    </RandomPositionContext.Provider>
  );
};
