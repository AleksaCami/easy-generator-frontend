import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  name: string;
}

interface SessionState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: SessionState = {
  isLoggedIn: false,
  user: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
