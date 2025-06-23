import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

axios.defaults.withCredentials = true;

function CustomDrawerContent(props:DrawerContentComponentProps) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const router = useRouter(); 

  const handleLogout = async () => {
        console.log(router);
        const response = await axios.post(`${apiUrl}/auth/logout`,{withCredentials: true})
        // navigation.replace("Login");
        console.log(response)
         // inspect current path
        router.navigate('/');
    }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => handleLogout()}
      />
    </DrawerContentScrollView>
  );
}


export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent} screenOptions={{
        drawerPosition:'right',
        headerStyle:{
        backgroundColor:'#25292e',
      }, headerTitleStyle:{
        color:'white'
      }, headerTintColor:'white'
      }}>
        <Drawer.Screen
          name="index" 
          options={{
            drawerLabel: 'Home',
            title: 'Campus Bell',
          }}
           
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}