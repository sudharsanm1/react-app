import { createContext } from "react";

export const initialState = {
  patients: [],
  loggedInUser: undefined,
};

export const Context = createContext(undefined);
