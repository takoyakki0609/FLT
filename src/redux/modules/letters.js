import { createSlice } from "@reduxjs/toolkit";
import fakeData from "fakeData.json";

const initialState = fakeData;

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetters: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    },
    editLetter: (state, action) => {
      const { id, editingText } = action.payload;
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editingText };
        }
        return letter;
      });
    },
  },
});

export default lettersSlice.reducer;
export const {addLetters, deleteLetter, editLetter} = lettersSlice.actions
