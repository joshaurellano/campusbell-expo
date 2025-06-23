import { StyleSheet, Text, View } from "react-native";

export default function notification() {
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
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
