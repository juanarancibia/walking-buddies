import React, { useState } from "react";

export const BuddiesUpdatedContext = React.createContext(null);

export const BuddiesUpdatedContextProvider = ({ children }) => {
  const [buddiesUpdated, setBuddiesUpdated] = useState(false);

  return (
    <BuddiesUpdatedContext.Provider
      value={{
        buddiesUpdated,
        setBuddiesUpdated,
      }}
    >
      {children}
    </BuddiesUpdatedContext.Provider>
  );
};
