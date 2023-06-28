import { Pressable, View, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import CPressable from './custom-pressable';
import PropTypes from 'prop-types';

export default function SearchButton(props) {
  const { title, onPress } = props;
  return (
    <CPressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </CPressable>
  );
}

SearchButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.padding.md,
    paddingVertical: theme.padding.sm,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23,
  },
  text: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.secondary,
    fontWeight: '600',
  },
});
