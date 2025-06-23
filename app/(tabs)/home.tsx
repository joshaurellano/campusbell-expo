import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from 'expo-router';
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
const router = useRouter();

export default function home() {
  const [token, setToken] = useState <string | any>(null)
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null)

type DecodedToken = {
  user_id: number,
  username: string,
  role_id: number,
  iat: number,
  exp: number
}
const checkUserToken = async () => {
      const getToken = await AsyncStorage.getItem("token");
      
      if (getToken) {
        setToken(getToken)
      } 
      else {
        router.replace('/')
      }
};

const decodeToken = async () => {
  const decodedToken = jwtDecode<DecodedToken>(token)
  setDecodedToken(decodedToken);
}
  useEffect (() => {
    checkUserToken()
  }, [])
  useEffect (() => {
    decodeToken()
  },[token])

  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
