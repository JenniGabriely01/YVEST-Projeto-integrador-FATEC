import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ title: "Login" }} />
        <Stack.Screen name="cadastro" options={{ title: "Cadastro" }} />
        <Stack.Screen name="home" options={{ title: "Home" }} />
        <Stack.Screen name="historico" options={{ title: "Historico" }} />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
