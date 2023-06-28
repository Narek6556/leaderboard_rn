import { StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    marginHorizontal: theme.padding.lg,
  },
  section: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'space-between',
    height: '60%',
  },
});
