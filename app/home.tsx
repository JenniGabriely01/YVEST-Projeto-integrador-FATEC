import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Menu from "../components/menu";
import Header from "../components/header";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  // handler para navegar até a tela de histórico
  const handlePress = () => {
    router.push("/historico"); // leva pra tela de histórico
  };

  return (
    <View style={styles.container}>
      <View>
        <Header />

        {/* Seção de valor mensal gasto */}
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.label}>Valor mensal gasto</Text>
            <Text style={styles.value}>R$ 26.827,34</Text>
          </View>

          <TouchableOpacity>
            <Image source={require("../assets/icons/eye.png")} />
          </TouchableOpacity>
        </View>

        {/* Cards principais */}
        <View style={styles.cardsRow}>
          <View style={styles.card}>
            <Image
              source={require("../assets/icons/financas.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardLabel}>Finanças</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/icons/despesas.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardLabel}>Despesas</Text>
          </View>

          {/* Card que leva para histórico */}
          <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Image
              source={require("../assets/icons/historico.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardLabel}>Histórico</Text>
          </TouchableOpacity>
        </View>

        {/* Categorias */}
        <Text style={{ marginLeft: 15, marginTop: 25, fontWeight: "600" }}>
          Categorias
        </Text>
        <View style={styles.cardsRow}>
          <View style={styles.card}>
            <Image
              source={require("../assets/icons/financasCa.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardLabel}>Finanças</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/icons/educacao.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardLabel}>Educação</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/icons/saude.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardLabel}>Saúde</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/icons/contas.png")}
              style={styles.cardIcon}
            />
            <Text style={styles.cardLabel}>Contas</Text>
          </View>
        </View>

        {/* Notícias */}
        <View style={{ marginLeft: 15, marginTop: 25 }}>
          <Text style={{ fontWeight: "600" }}>Notícias Recentes</Text>

          <View style={{ marginTop: 10 }}>
            <Image source={require("../assets/icons/not1.png")} />
            <Text style={{ fontWeight: "500", marginTop: 5 }}>
              Mercado financeiro registra queda preocupante após taxações dos EUA
            </Text>
            <Text style={{ color: "#555", marginTop: 3 }}>14/10/2025</Text>
          </View>
        </View>
      </View>

      {/* Menu inferior */}
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
  },
  label: {
    color: "#3A3A3A",
    fontSize: 18,
    fontWeight: "500",
  },
  value: {
    color: "#002E80",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 2,
  },
  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    width: 100,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardIcon: {
    width: 24,
    height: 24,
    tintColor: "#002E80",
    marginBottom: 5,
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#002E80",
  },
});
