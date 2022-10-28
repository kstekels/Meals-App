import { View, StyleSheet, Text } from 'react-native';

const Subtitle = ({ title }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
