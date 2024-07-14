import React from "react";
import { Action } from "./Action";
import findIndexById from "./Helper";
export const initialState = [
  {
    id: 1,
    name: "Surya",
    email: "asuryababu1454@gmail.com",
    mobile: "9934444783",
    batch: "FSD1",
  },
  {
    id: 2,
    name: "prathap",
    email: "prathap@gmail.com",
    mobile: "9840548835",
    batch: "FSD2",
  },
  {
    id: 3,
    name: "Arul",
    email: "arull12@gmail.com",
    mobile: "9840548836",
    batch: "FSD3",
  },
  {
    id: 4,
    name: "praveen",
    email: "praveen@gmail.com",
    mobile: "9840548837",
    batch: "FSD4",
  },
];

function Reducer(state, action) {
  switch (action.type) {
    case Action.ADD_USER:
      state.push(action.payload);
      return [...state];
      break;

    case Action.EDIT_USER:
     const indexs= findIndexById(action.payload.id, state)
      state.splice(indexs, 1, action.payload); //replace the old data with edited data
      return [...state]
      break;

    case Action.DELETE_USER:
      const index = findIndexById(action.payload, state);
      state.splice(index, 1);
      return [...state];
      break;
  }
}
export default Reducer;
