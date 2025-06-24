import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Card } from '@rneui/themed';
import axios, { AxiosError } from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from "expo-font";
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [token, setToken] = useState <string| null>(null)
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState('');

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  type ErrorResponseData = {
  message: string;
  };

  let [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf')
  });

  const router = useRouter();

  if(!fontsLoaded) {
    return <AppLoading />
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`,{
        username,
        password
      }, {headers : { 'X-Client-Type': 'mobile'}})
      await AsyncStorage.setItem("token", response.data.token)
      
      router.replace('/(tabs)/(home)');
    } catch(error) {
      // console.error(error)
      const err = error as AxiosError<ErrorResponseData>;
      setError(err?.response?.data?.message || 'Unknown error occured')
    }
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in to Campus Bell</Text>
      
      <View style={styles.formContainer}>
      <Card containerStyle={styles.cardStyle}>
        <View style={styles.formLabelPos}>
        <Ionicons name='person' style={styles.labelicon} />
        <Text style={styles.formLabel}> Username</Text>
        </View>
        <TextInput value={username} onChangeText={setUsername} 
        placeholder='johnSmith123' 
        placeholderTextColor='#aaa'
        style={styles.formInput} ></TextInput>

        <View style={styles.formLabelPos}>
        <Ionicons name='lock-closed' style={styles.labelicon} />
        <Text style={styles.formLabel}> Password</Text>
        </View>
        <TextInput value={password} onChangeText={setPassword} 
        placeholder="Enter your password"
        placeholderTextColor='#aaa'
        secureTextEntry style={styles.formInput} ></TextInput>
      
       <Button
          title="Login" buttonStyle={{borderRadius: 15}}
          onPress={() => handleLogin ()}
        />
        {
          error && <Text style={{color:'red'}}>{error}</Text>
        }
      </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      fontFamily: 'Roboto',
      color: 'white',
      fontSize: 18,
      fontWeight: 600
    },
    formLabel : {
      fontFamily: 'Roboto',
      color: 'white',
      fontSize: 16,
      fontWeight: 300
    },
    formContainer: {
      width: 280
    },
    formInput: {
      marginBottom: 10, 
      padding: 12,
      backgroundColor: '#2f3545',
      borderRadius: 10,
      paddingHorizontal: 12,
      color: '#fff'
    },
    formLabelPos: {
      flex: 1, 
      flexDirection: 'row', 
      alignItems:'center'
    }, 
    labelicon : {
      color: 'white',
      fontSize: 12
    },
    cardStyle: {
      backgroundColor:'#2f343a', 
      borderRadius: 15, 
      padding: 24,
      marginVertical: 12, 
      borderWidth:.5, 
      borderColor:'gray',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 10, 
    }
})
