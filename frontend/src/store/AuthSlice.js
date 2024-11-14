import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk('auth/logIn', async (data, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI;
  try {
    const req = await fetch(`http://localhost:3001/users/signin`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const res = await req.json();
    if (res.length !== 0) {
      if (res.message) {
        return false;
      } else {
        dispatch(setUserInfo(res));
        return true;
      }
    } else {
      return false;
    }
  } catch (error) {
    rejectWithValue(error.message);
  }
});

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const req = await fetch('http://localhost:3001/users/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const res = await req.json();
      if (res.length !== 0) {
        if (res.message) {
          return false;
        } else {
          dispatch(setUserInfo(res));
          return true;
        }
      } else {
        return false;
      }
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/updateUserInfo',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(`http://localhost:3001/users/${data.userId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer${data.token}`,
        },
      });
      const res = await req.json();
      return res;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const setFavourite = createAsyncThunk(
  'auth/setFavourite',
  async (info, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch('http://localhost:3001/users', {
        method: 'PUT',
        body: JSON.stringify(info),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const res = await req.json();
      return res;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: [],
    registered: false,
    profileImg: null,
    favourite: [],
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.registered = false;
      state.user = [];
    },

    // Signup set Profile image
    setProfileImg: (state, action) => {
      state.profileImg =
        action.payload === null
          ? null
          : action.payload.length !== 0
          ? action.payload[0].name
          : state.profileImg;
    },

    // change profile pic from ProfileInfo
    changeProfile: (state, action) => {
      state.profileImg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.registered = action.payload;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.registered = action.payload;
    });
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(setFavourite.fulfilled, (state, action) => {
      const updateItems = action.payload;

      if (!updateItems.message) {
        state.favourite = updateItems;
      }
    });
  },
});

export const { setUserInfo } = AuthSlice.actions;
export const { logout } = AuthSlice.actions;
export const { setProfileImg } = AuthSlice.actions;
export const { changeProfile } = AuthSlice.actions;
export default AuthSlice.reducer;
