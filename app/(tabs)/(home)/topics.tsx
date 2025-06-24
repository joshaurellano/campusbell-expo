import { StyleSheet, Text, View } from "react-native";

export default function sample() {
  return (
    <View style={styles.container}>
      <Text>Topics</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
