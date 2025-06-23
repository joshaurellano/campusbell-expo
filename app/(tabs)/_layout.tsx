import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout () {
  return (
    <Tabs  screenOptions={{
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',
    },
  }}>
      <Tabs.Screen 
      name='home'
      options={{
        title: "Home",
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
      }}
       />
        <Tabs.Screen 
        name='notification'
        options={{
        title: "Notifications",
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'notifications' : 'notifications-outline'} color={color} size={24} />
          ),
      }} />

        <Tabs.Screen 
        name='message'
        options={{
        title: "Message",
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'} color={color} size={24} />
          ),
      }} />

        <Tabs.Screen 
        name='profile' 
        options={{
        title: "Profile",
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={24} />
          ),
      }}
        />
    </Tabs>
  )
}