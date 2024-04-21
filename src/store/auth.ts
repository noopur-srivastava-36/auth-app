
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userData: (state, data) => {
        console.log(data.payload, 'aksjdbakjsbdkjasbd')
      state.token = data.payload
    },
 
  },
});

export const { userData } = authSlice.actions;
export default authSlice.reducer;
