import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const { Navigator, Screen } = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Navigator); 

export default function HomeTopTabsLayout() {
  return (
    <TopTabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#25292e' },
        tabBarLabelStyle: { color: 'white' },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
      }}
    >
      <TopTabs.Screen name="home" options={{ title: 'Home' }} />
      <TopTabs.Screen name="topics" options={{ title: 'Topic' }} />
    </TopTabs>
  );
}
