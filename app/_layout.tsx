import { Cairo_900Black, useFonts } from '@expo-google-fonts/cairo';
import { Stack } from 'expo-router';


import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [loaded, error] = useFonts({
    Cairo_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
      <Stack />
  );
}
