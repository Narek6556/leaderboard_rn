import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortedUsers: [],
  users: {},
  topRanked: [],
  searchedId: '',
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    searchUser: (state, action) => {},
    setSearchID: (state, action) => {
      state.searchedId = action.payload.id;
    },
    setTopRankedUsers: (state, action) => {
      state.topRanked = action.payload.topRanked;
    },
    setSortedUsers: (state, action) => {
      state.sortedUsers = action.payload.sortedUsers;
    },
  },
});

export const topRankedUsers = state => state.leaderboard.topRanked;
export const searchedId = state => state.leaderboard.searchedId;
export const sortedUsersSelector = state => state.leaderboard.sortedUsers;
export const { setTopRankedUsers, setSearchID, setSortedUsers } =
  leaderboardSlice.actions;

export default leaderboardSlice.reducer;
