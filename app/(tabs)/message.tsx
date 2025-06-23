import { StyleSheet, Text, View } from "react-native";

export default function message() {
  return (
    <View style={styles.container}>
      <Text>message</Text>
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
