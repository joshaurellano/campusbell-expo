import { Button, Card } from '@rneui/themed';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from "expo-font";
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('')

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  let [fontsLoaded] = useFonts({
    'Roboto': require('../assets/fonts/Roboto-VariableFont_wdth,wght.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`,{
        username,
        password
      })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  } 

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.text}>Sign in to Campus Bell</Text>
      </View>
      
      <View style={styles.formContainer}>
      <Card containerStyle={{ backgroundColor:'#2f343a', borderRadius: 15, padding: 20 }}>
        <Text style={styles.formLabel}>Username</Text>
        <TextInput value={username} onChangeText={setUsername} placeholder='johnSmith123' style={styles.formInput} ></TextInput>

        <Text style={styles.formLabel}>Password</Text>
        <TextInput value={password} onChangeText={setPassword} placeholder='Enter your password' secureTextEntry style={styles.formInput} ></TextInput>
      
       <Button
          title="Login" buttonStyle={{borderRadius: 15}}
          onPress={() => handleLogin ()}
        />
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
      fontWeight: 200
    },
    formLabel : {
      fontFamily: 'Roboto',
      color: 'white',
      fontSize: 16,
      fontWeight: 100
    },
    formContainer: {
      width: 280
    },
    formInput: {
      borderRadius: 15,
      borderWidth: .5, 
      borderColor: 'white',
      color:'white',
      marginBottom: 10, 
      padding: 12
    }
})
