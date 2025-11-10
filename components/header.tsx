import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Linha superior: foto, nome, ícones */}
      <View style={styles.topRow}>
        <View style={styles.profile}>
          <Image
            source={require("../assets/icons/profile.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Jennifer Gabriely</Text>
        </View>

        <View style={styles.icons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/icons/bell.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../assets/icons/more.png")}
              
            />
          </TouchableOpacity>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
    marginLeft: 15,
    marginRight: 15,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#002E80",
  },
  icons: {
    flexDirection: "row",
    gap: 12,
  },
tomRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
