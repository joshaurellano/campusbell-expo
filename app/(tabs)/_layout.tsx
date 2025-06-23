import { Tabs } from 'expo-router';

export default function TabLayout () {
  return (
    <Tabs>
      <Tabs.Screen name='home'
      options={{
        title: "Home"
      }}
       />
        <Tabs.Screen name='notification' />

         <Tabs.Screen name='message' />

        <Tabs.Screen name='profile' />
    </Tabs>
  )
}