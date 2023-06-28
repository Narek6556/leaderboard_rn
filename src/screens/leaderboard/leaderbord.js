import { Alert, StyleSheet, TextInput, View } from 'react-native';
import SearchButton from '../../components/search-button';
import SearchInput from '../../components/search-text-input';
import { useState } from 'react';
import LeaderBoardTable from '../../components/table/leaderboard-table';
import useSearchInput from '../../hooks/useSearchInput';
import useLeaderboardData from '../../hooks/useLeaderboardData';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchID,
  setTopRankedUsers,
  sortedUsersSelector,
  topRankedUsers,
} from '../../store/slices/leaderboard.slice';

import { styles } from './leadeboard.styles';

export default function LeaderBoard(props) {
  const [text, setText] = useState('');
  const [searchedUserId] = useSearchInput(text);
  const [users] = useLeaderboardData();
  const dispatch = useDispatch();
  const sortedUsers = useSelector(sortedUsersSelector);
  const topRanked = useSelector(topRankedUsers);

  const onSearch = () => {
    dispatch(setSearchID({ id: searchedUserId }));
    const indexOfUser = sortedUsers.findIndex(
      user => user.uid === searchedUserId
    );
    if (indexOfUser < 0) {
      Alert.alert(
        'Error while searching!',
        'This user name does not exist! Please specify an existing user name!'
      );
    }
    if (indexOfUser + 1 > 10) {
      let newTopRanked = [...topRanked];
      newTopRanked[9] = users[searchedUserId];
      dispatch(setTopRankedUsers({ topRanked: newTopRanked }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.section}>
          <SearchInput value={text} onChangeText={setText} />
          <SearchButton title={'Search'} onPress={onSearch} />
        </View>
        <LeaderBoardTable searchedUserId={searchedUserId} />
      </View>
    </View>
  );
}
