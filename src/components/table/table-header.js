import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

export default function TableHeader(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.col, { width: '25%' }]}>
        <Text style={styles.text}>Name</Text>
      </View>
      <View style={[styles.col, { width: '11%' }]}>
        <Text style={styles.text}>Rank</Text>
      </View>
      <View style={[styles.col, { width: '35%' }]}>
        <Text style={styles.text}>Number of bananas</Text>
      </View>
      <View style={[styles.col, { width: '31%' }]}>
        <Text style={styles.text}>is Searched User?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  col: {
    borderRadius: 12,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    marginRight: 2,
  },
  text: {
    color: theme.colors.base,
    fontSize: theme.fontSize.xs,
  },
  container: {
    flexDirection: 'row',
    marginBottom: theme.padding.sm,
  },
});
