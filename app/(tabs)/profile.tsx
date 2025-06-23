import { StyleSheet, Text, View } from "react-native";

export default function profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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
