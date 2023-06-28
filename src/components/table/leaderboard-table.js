import { View, StyleSheet, FlatList, Platform, Dimensions } from 'react-native';
import { theme } from '../../constants/theme';
import TableHeader from './table-header';
import TableRow from './table-rows';
import { useSelector } from 'react-redux';
import { topRankedUsers } from '../../store/slices/leaderboard.slice';
import { useWindowDimensions } from 'react-native';

export default function LeaderBoardTable(props) {
  const topRanked = useSelector(topRankedUsers);
  const { height, width } = useWindowDimensions();
  const listHeight = height < 852 ? height / 1.5 : 520;

  return (
    <View style={styles.container}>
      <TableHeader />
      <FlatList
        data={topRanked}
        style={{ width: '100%', height: listHeight, marginBottom: 25 }}
        renderItem={({ item }) => <TableRow user={item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: theme.padding.sm,
  },
});
