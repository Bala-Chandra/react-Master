import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    selectedUser: null,
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
    search: '',
  },
  reducers: {
    selectUser(state, action) {
      state.selectedUser = action.payload;
    },
    setSearch(state, action) {
    state.search = action.payload;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectUser, setSearch } = usersSlice.actions;
export default usersSlice.reducer;

export const selectFilteredUsers = (state) => {
  const { list, search } = state.users;

  return list.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
};
