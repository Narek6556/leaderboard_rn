import { useState } from 'react';
import useLeaderboardData from './useLeaderboardData';
import { useSelector } from 'react-redux';
import { sortedUsersSelector } from '../store/slices/leaderboard.slice';

export default function useSearchInput(name) {
  const sortedUsers = useSelector(sortedUsersSelector);

  let searchedUserId = '';
  sortedUsers.map(user => {
    if (user.name === name) {
      searchedUserId = user.uid;
    }
  });
  return [searchedUserId];
}
