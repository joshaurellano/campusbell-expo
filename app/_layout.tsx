import { Ionicons } from '@expo/vector-icons';
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)/index" 
      options={{
        headerTitle: "Home",
        headerTitleAlign: "center", 
        headerLeft: () => 
          <Ionicons name="home" color="black" size={24} />,
        headerRight: () => 
          <Ionicons name="menu" color="black" size={24} />
      }} />
      
      <Stack.Screen name="index" 
      options={{
        headerTitle: 'Login',
        headerShown: false
      }}
      />

    </Stack> 
  );
};

export default Layout;