import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { useSelector } from 'react-redux';
import { searchedId } from '../../store/slices/leaderboard.slice';
import PropTypes from 'prop-types';
export default function TableRow(props) {
  const { name, rank, bananas, uid } = props.user;
  const userSearchedID = useSelector(searchedId);
  const isSearched = userSearchedID === uid;

  return (
    <View style={styles.headerContainer}>
      <View style={[styles.container, { width: '24%' }]}>
        <Text
          style={[
            styles.text,
            {
              color: isSearched ? theme.colors.primary : theme.colors.secondary,
            },
          ]}
        >
          {name}
        </Text>
      </View>
      <View style={[styles.container, { width: '11%' }]}>
        <Text
          style={[
            styles.text,
            {
              color: isSearched ? theme.colors.primary : theme.colors.secondary,
            },
          ]}
        >
          {rank}
        </Text>
      </View>
      <View style={[styles.container, { width: '35%' }]}>
        <Text
          style={[
            styles.text,
            {
              color: isSearched ? theme.colors.primary : theme.colors.secondary,
            },
          ]}
        >
          {bananas}
        </Text>
      </View>
      <View style={[styles.container, { width: '31%' }]}>
        <Text
          style={[
            styles.text,
            {
              color: isSearched ? theme.colors.primary : theme.colors.secondary,
            },
          ]}
        >
          {isSearched ? 'yes' : 'no'}
        </Text>
      </View>
    </View>
  );
}

TableRow.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    bananas: PropTypes.number.isRequired,
    uid: PropTypes.string.isRequired,
  }),
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  text: {
    color: theme.colors.secondary_light,
    fontSize: theme.fontSize.xs,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: theme.padding.sm,
  },
});
