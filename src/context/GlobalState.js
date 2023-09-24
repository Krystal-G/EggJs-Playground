import React, { createContext, useContext, useState } from "react";
import {parse} from "../scripts/parse";
const Main = createContext();

const MainContext = ({ children }) => {
  const [code, setCode] = useState("");
  const [parseTree, setParseTree] = useState({});
  const [parseError, setParseError] = useState("");
  const [output, setOutput] = useState("");
  const [runError, setRunError] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Main.Provider
      value={{
        code,
        setCode,
        parseTree,
        setParseTree,
        parseError,
        setParseError,
        output,
        setOutput,
        runError,
        setRunError,
        loading,
        setLoading,
      }}
    >
      {children}
    </Main.Provider>
  );
};

export default MainContext;

export const MainState = () => {
  return useContext(Main);
};
