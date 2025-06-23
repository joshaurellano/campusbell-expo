import { Stack } from "expo-router";
const Layout = () => {
  return (

    <Stack />
    // <Stack screenOptions={{
    //   headerStyle:
    // {
    //   backgroundColor:'#25292e',
    // }, 
    //   headerTitleStyle:{
    //     color:'white'
    // }
    // }}>
    //   <Stack.Screen name="(tabs)" 
    //   options={{
    //     headerTitle: "Campus Bell",
    //     headerShown: false
    //       // headerLeft: () => 
    //       // <Ionicons name="home" color="black" size={24} />
    //   }}/>
      
    //   <Stack.Screen name="index" 
    //   options={{
    //     headerTitle: 'Login',
    //     headerShown: false
    //   }}
    //   />

    // </Stack> 
  );
};

export default Layout;
// import {
//   DrawerContentComponentProps,
//   DrawerContentScrollView,
//   DrawerItem,
//   DrawerItemList
// } from '@react-navigation/drawer';
// import axios from 'axios';
// import { useRouter } from 'expo-router';
// import { Drawer } from 'expo-router/drawer';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// axios.defaults.withCredentials = true;

// function CustomDrawerContent(props:DrawerContentComponentProps) {
//   const apiUrl = process.env.EXPO_PUBLIC_API_URL;
//   const router = useRouter(); 
//   const handleLogout = async () => {
//         const response = await axios.post(`${apiUrl}/auth/logout`,{withCredentials: true})
//         // navigation.replace("Login");
//         console.log(response)
//         console.log(router); // inspect current path
//         router.navigate('/');
//     }

//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Logout"
//         onPress={() => handleLogout()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Layout = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer drawerContent={CustomDrawerContent} screenOptions={{
//         drawerPosition:'right',
//         headerStyle:{
//         backgroundColor:'#25292e',
//       }, headerTitleStyle:{
//         color:'white'
//       }, headerTintColor:'white'
//       }}>
//         <Drawer.Screen 
//           options={{
//             drawerLabel: 'Welcome'
//           }}
//         />
//         <Drawer.Screen
//           name="(tabs)/index"
//           options={{
//             drawerLabel: 'Home',
//             title: 'Campus Bell',
//           }}
//         />
//         <Drawer.Screen
//           name="index"
//           options={{
//             headerShown:false,
//             drawerItemStyle: 
//             { 
//               display: 'none' 
//             }
//           }}
//         />
//       </Drawer>
//     </GestureHandlerRootView>
//   );
// };

// export default Layout;