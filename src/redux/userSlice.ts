import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface User {
  id?: number;
  username: string;
  email?: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
}

const API_BASE = import.meta.env.VITE_API_URL ?? "";

const initialState: UserState = {
  user: null,
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  status: "idle",
  error: null,
};

type Credentials = { username: string; password: string };
type RegisterPayload = { username: string; email?: string; password: string };

export const loginUser = createAsyncThunk<
  { user: User; token: string },
  Credentials,
  { rejectValue: string }
>("user/login", async (creds, thunkAPI) => {
  try {
    const res = await fetch(`${API_BASE}/api/auth/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(creds),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: res.statusText }));
      return thunkAPI.rejectWithValue(err.detail || JSON.stringify(err));
    }
    const data = await res.json();
    localStorage.setItem("token", data.token);
    return data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e?.message ?? "Network error");
  }
});

export const fetchCurrentUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("user/fetchCurrent", async (_, thunkAPI) => {
  const token = localStorage.getItem("token");
  if (!token) return thunkAPI.rejectWithValue("No token");
  try {
    const res = await fetch(`${API_BASE}/api/auth/me/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: res.statusText }));
      return thunkAPI.rejectWithValue(err.detail || JSON.stringify(err));
    }
    return await res.json();
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e?.message ?? "Network error");
  }
});

export const registerUser = createAsyncThunk<
  { user: User; token?: string },
  RegisterPayload,
  { rejectValue: string }
>("user/register", async (payload, thunkAPI) => {
  try {
    const res = await fetch(`${API_BASE}/api/auth/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: res.statusText }));
      return thunkAPI.rejectWithValue(err.detail || JSON.stringify(err));
    }
    const data = await res.json();
    if (data.token) localStorage.setItem("token", data.token);
    return data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e?.message ?? "Network error");
  }
});

export const updateUser = createAsyncThunk<
  User,
  Partial<User>,
  { rejectValue: string }
>("user/update", async (payload, thunkAPI) => {
  const token = localStorage.getItem("token");
  if (!token) return thunkAPI.rejectWithValue("No token");
  try {
    const res = await fetch(`${API_BASE}/api/auth/me/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: res.statusText }));
      return thunkAPI.rejectWithValue(err.detail || JSON.stringify(err));
    }
    return await res.json();
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e?.message ?? "Network error");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      if (typeof window !== "undefined") localStorage.removeItem("token");
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(loginUser.pending, (s) => {
        s.status = "loading";
        s.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (s, a: PayloadAction<{ user: User; token: string }>) => {
          s.status = "succeeded";
          s.user = a.payload.user;
          s.token = a.payload.token;
          s.error = null;
        }
      )
      .addCase(loginUser.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload ?? a.error.message ?? "Login failed";
      })
      // fetchCurrentUser
      .addCase(fetchCurrentUser.pending, (s) => {
        s.status = "loading";
        s.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (s, a: PayloadAction<User>) => {
        s.status = "succeeded";
        s.user = a.payload;
        s.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload ?? a.error.message ?? "Fetch user failed";
        // if token invalid, clear it
        if (a.payload === "No token" || a.error?.message) {
          s.token = null;
          if (typeof window !== "undefined") localStorage.removeItem("token");
        }
      })
      // register
      .addCase(registerUser.pending, (s) => {
        s.status = "loading";
        s.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (s, a: PayloadAction<{ user: User; token?: string }>) => {
          s.status = "succeeded";
          s.user = a.payload.user;
          if (a.payload.token) s.token = a.payload.token;
          s.error = null;
        }
      )
      .addCase(registerUser.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload ?? a.error.message ?? "Register failed";
      })
      // update
      .addCase(updateUser.pending, (s) => {
        s.status = "loading";
        s.error = null;
      })
      .addCase(updateUser.fulfilled, (s, a: PayloadAction<User>) => {
        s.status = "succeeded";
        s.user = a.payload;
        s.error = null;
      })
      .addCase(updateUser.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload ?? a.error.message ?? "Update failed";
      });
  },
});

export const { logout, clearError } = userSlice.actions;
export default userSlice.reducer;
