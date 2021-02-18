import { createContext, useContext, useState } from "react";

export const ToggleContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
});

export const ToggleProvider = ({ children }) => {
  const context = useContext(ToggleContext);
  const [open, setOpen] = useState(context.open);

  const toggle = {
    open,
    setOpen,
  };

  return (
    <ToggleContext.Provider value={toggle}>{children}</ToggleContext.Provider>
  );
};
