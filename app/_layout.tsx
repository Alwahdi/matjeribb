import { Cairo_400Regular, useFonts } from "@expo-google-fonts/cairo";
import { Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Cairo: Cairo_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // Apply Cairo font to header/title if needed
        headerTitleStyle: { fontFamily: "Cairo" },
      }}
    />
  );
}
