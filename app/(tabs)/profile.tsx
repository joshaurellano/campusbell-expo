import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from 'expo-router';
import { Button, StyleSheet, View } from "react-native";

export default function profile() {
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const router = useRouter();

  const handleLogout = async () => {
    const logout = await AsyncStorage.removeItem('token');
    router.replace('/')
  }
  
  return (
    <View style={styles.container}>
      <Button title="logout" onPress={handleLogout}/>
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
