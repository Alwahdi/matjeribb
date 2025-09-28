import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';
                    if (route.name === 'home') iconName = 'home';
                    else if (route.name === 'search') iconName = 'search';
                    else if (route.name === 'profile') iconName = 'person';
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#2f95dc',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tabs.Screen name="home" options={{ title: 'Home' }} />
            <Tabs.Screen name="search" options={{ title: 'Search' }} />
            <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
        </Tabs>
    );
}