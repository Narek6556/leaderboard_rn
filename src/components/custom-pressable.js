import { Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function CPressable(props) {
  const { children } = props;
  return (
    <Pressable style={styles.touchable} {...props}>
      {children}
    </Pressable>
  );
}

CPressable.propTypes = {
  children: PropTypes.object,
};

const styles = StyleSheet.create({
  touchable: ({ pressed }) => ({ opacity: pressed ? 0.4 : 1 }),
});
