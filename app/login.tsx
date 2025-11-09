import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Faça Login</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <Text style={styles.titleplaceholder}>Endereço de email</Text>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#808080" />

        <Text style={styles.titleplaceholder}>Confirme sua senha</Text>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor="#808080" />

        <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkContainer} onPress={() => router.push("/cadastro")}>
          <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    width: "100%",
    alignItems: "flex-start",
  },
  title: {
    color: "#084DA6",
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#084DA6",
    fontSize: 20,
    marginBottom: 40,
    fontWeight: "400",
  },
  titleplaceholder: {
    color: "#000",
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "400",
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 25,
    borderWidth: 1,        // espessura da borda
    borderColor: "#808080" // cor da borda
  },
  button: {
    backgroundColor: "#084DA6",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "#084DA6",
    fontWeight: "400",
    textDecorationLine: "underline",
    marginTop: 10,
    fontSize: 16,
    alignSelf: "center",
  },
  linkContainer: {
    width: "100%",
    alignItems: "center", // centraliza o texto horizontalmente
    marginTop: 10,
  },
});
