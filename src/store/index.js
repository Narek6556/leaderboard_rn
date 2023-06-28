import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from '../store/slices/leaderboard.slice';
export const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
  },
});
