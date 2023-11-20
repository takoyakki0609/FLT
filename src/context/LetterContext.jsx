import { createContext, useState } from "react";
import fakeData from "fakeData.json";

export const LetterContext = createContext(null);

function LetterContextProvider({ children }) {
  const [letters, setLetters] = useState(fakeData);
  return (
    <LetterContextProvider value={{ letters, setLetters }}>
      {children}
    </LetterContextProvider>
  );
}

export default LetterContextProvider