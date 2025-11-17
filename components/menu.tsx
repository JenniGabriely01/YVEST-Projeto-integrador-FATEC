import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Menu({ onPlusPress }: { onPlusPress: () => void }) {

  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Botão Início */}
      <TouchableOpacity style={styles.item} onPress={() => router.push("/")}>
        <Image source={require("../assets/icons/home.png")} style={styles.icon} />
        <Text style={styles.label}>Início</Text>
      </TouchableOpacity>

      {/* Botão Controle */}
      <TouchableOpacity style={styles.item} onPress={() => router.push("/controle")}>
        <Image source={require("../assets/icons/control.png")} style={styles.icon} />
        <Text style={styles.label}>Controle</Text>
      </TouchableOpacity>

      {/* Botão Plus (abre modal) */}
      <TouchableOpacity style={styles.addButton} onPress={onPlusPress}>
        <View>
          <Image source={require("../assets/icons/plus.png")} />
        </View>
      </TouchableOpacity>

      {/* Botão Transações */}
      <TouchableOpacity style={styles.item} onPress={() => router.push("/transacoes")}>
        <Image source={require("../assets/icons/transaction.png")} style={styles.icon} />
        <Text style={styles.label}>Transações</Text>
      </TouchableOpacity>

      {/* Botão Assistente */}
      <TouchableOpacity style={styles.item} onPress={() => router.push("/assistente")}>
        <Image source={require("../assets/icons/assistant.png")} style={styles.icon} />
        <Text style={styles.label}>Assistente</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 8,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },

  item: {
    alignItems: "center",
  },

  icon: {
    width: 30,
    height: 30,
    tintColor: "#002E80",
  },

  label: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "600",
    color: "#002E80",
  },

  addButton: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});
