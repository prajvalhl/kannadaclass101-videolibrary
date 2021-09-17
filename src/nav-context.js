import { createContext, useContext, useReducer } from "react";

const Nav = createContext();

function NavReducer(state, action) {
  switch (action.type) {
    case "MENU":
      return { ...state, menu: !state.menu };
    default:
      return state;
  }
}

export function NavProvider({ children }) {
  const [{ menu }, dispatch] = useReducer(NavReducer, { menu: true });
  return <Nav.Provider value={{ menu, dispatch }}>{children}</Nav.Provider>;
}

export function useNav() {
  return useContext(Nav);
}
