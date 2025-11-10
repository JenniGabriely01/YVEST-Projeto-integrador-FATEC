import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Menu() {
  const router = useRouter();

  const handlePress = () => {
    router.push("/login"); 
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.item} onPress={handlePress}>
        <Image source={require("../assets/icons/home.png")} style={styles.icon} />
        <Text style={styles.label}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handlePress}>
        <Image source={require("../assets/icons/control.png")} style={styles.icon} />
        <Text style={styles.label}>Controle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={handlePress}>
        <View>
          <Image source={require("../assets/icons/plus.png")} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handlePress}>
        <Image source={require("../assets/icons/transaction.png")} style={styles.icon} />
        <Text style={styles.label}>Transações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={handlePress}>
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
    fontSize: 17,
    fontWeight: "600",
    color: "#002E80",
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    left: "0%",
  },
});
