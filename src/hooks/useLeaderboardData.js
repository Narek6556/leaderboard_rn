import { useState, useEffect } from 'react';
import LEADERBOARD_JSON from '../assets/leaderboard.json';
import { useDispatch } from 'react-redux';
import {
  setSortedUsers,
  setTopRankedUsers,
} from '../store/slices/leaderboard.slice';

export default function useLeaderboardData() {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(LEADERBOARD_JSON));
    setUsers(data);
    const arr = [];
    for (let user in data) {
      arr.push(data[user]);
    }
    arr.sort((a, b) => {
      if (a.bananas > b.bananas) {
        return -1;
      } else if (a.bananas < b.bananas) {
        return 1;
      }
      return 0;
    });
    const topRanked = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i].rank = i + 1;
      if (i < 10) {
        topRanked.push(arr[i]);
      }
    }
    dispatch(setSortedUsers({ sortedUsers: arr }));
    dispatch(setTopRankedUsers({ topRanked: topRanked }));
  }, []);
  return [users];
}
