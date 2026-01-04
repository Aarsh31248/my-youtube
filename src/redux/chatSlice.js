import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    isChatOpen: true,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
    toggleChat: (state) => {
      state.isChatOpen = !state.isChatOpen;
    },
  },
});

export const { addMessage, toggleChat } = chatSlice.actions;

export default chatSlice.reducer;
