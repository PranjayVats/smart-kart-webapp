import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    deleteUser(state, action) {},
    updateUser(state, action) {},
    //here addUser, deleteUser and updateUser are action triggers
    //In order to use them, we need to export them.
  },
});
export default userSlice;
export const { addUser } = userSlice.actions;
