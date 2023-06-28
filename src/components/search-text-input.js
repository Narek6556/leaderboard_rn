import { View, TextInput, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
import PropTypes from 'prop-types';

export default function SearchInput(props) {
  return (
    <TextInput
      style={styles.input}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.base,
    paddingHorizontal: theme.padding.md,
    paddingVertical: theme.padding.sm,
    width: 250,
    fontSize: theme.fontSize.sm,
    borderColor: theme.colors.secondary_light,
    borderWidth: 1,
    borderRadius: 23,
  },
});
