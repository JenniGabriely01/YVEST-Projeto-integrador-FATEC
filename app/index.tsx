import { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/cadastro"); // vai pra cadastro após 3s
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon.png")}
        resizeMode="contain"
      />
      <Text style={styles.text}>Você no controle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084DA6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "400",
  },
});
