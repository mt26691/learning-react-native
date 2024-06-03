import { Text, StyleSheet } from 'react-native';


const ComponentScreen = () => {
  return (
    <Text style={styles.textStyle}>This is the component screen</Text>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});

export default ComponentScreen;