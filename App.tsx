import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, StyleSheet } from "react-native";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as Linking from 'expo-linking';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  // const prefix = Linking.createURL('/');
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const linking = {
    prefixes: [Linking.createURL('/'), 'https://app.example.com'],
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      {/* content */}
    </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
