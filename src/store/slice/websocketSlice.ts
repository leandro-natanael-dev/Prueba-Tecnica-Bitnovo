import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type WebSocketState = {
  connected: boolean;
  success: boolean;
  data: any | null;
};

const initialState: WebSocketState = {
  connected: false,
  success: false,
  data: null,
};

const websocketSlice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {
    setConnected: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
  },
});

export const {setConnected, setData, setSuccess} = websocketSlice.actions;
export default websocketSlice.reducer;
