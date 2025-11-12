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
        <View style={styles.mainCardsRow}>
          <View style={styles.mainCard}>
            <Image
              source={require("../assets/icons/financas.png")}
              style={styles.mainCardIcon}
            />
            <Text style={styles.mainCardLabel}>Finanças</Text>
          </View>

          <View style={styles.mainCard}>
            <Image
              source={require("../assets/icons/despesas.png")}
              style={styles.mainCardIcon}
            />
            <Text style={styles.mainCardLabel}>Despesas</Text>
          </View>

          <TouchableOpacity style={styles.mainCard} onPress={handlePress}>
            <Image
              source={require("../assets/icons/historico.png")}
              style={styles.mainCardIcon}
            />
            <Text style={styles.mainCardLabel}>Histórico</Text>
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

        {/* Notícias Recentes */}
        <View style={styles.newsContainer}>
          <View style={styles.newsHeader}>
            <Text style={styles.newsTitle}>Notícias Recentes</Text>
            <Text style={styles.newsOptions}>•••</Text>
          </View>

          {/* Card 1 */}
          <View style={styles.newsCard}>
            <Image
              source={require("../assets/icons/not1.png")}
              style={styles.newsImage}
            />
            <View style={styles.newsContent}>
              <Text style={styles.newsText}>
                Mercado financeiro registra queda preocupante após taxações dos EUA
              </Text>
              <Text style={styles.newsDate}>14/10/2025</Text>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.newsCard}>
            <Image
              source={require("../assets/icons/not1.png")}
              style={styles.newsImage}
            />
            <View style={styles.newsContent}>
              <Text style={styles.newsText}>
                Congresso Nacional aprova novas diretrizes orçamentárias para a União
              </Text>
              <Text style={styles.newsDate}>12/10/2025</Text>
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.newsCard}>
            <Image
              source={require("../assets/icons/not1.png")}
              style={styles.newsImage}
            />
            <View style={styles.newsContent}>
              <Text style={styles.newsText}>
                Inflação apresenta leve alta e preocupa o mercado interno brasileiro
              </Text>
              <Text style={styles.newsDate}>10/10/2025</Text>
            </View>
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
  mainCardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    marginBottom: 30,
    paddingHorizontal: 15,
  },
  mainCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    width: 110,
  },
  mainCardIcon: {
    width: 22,
    height: 22,
    tintColor: "#4D617BS",
    marginRight: 8,
  },
  mainCardLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4D617BS",
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
  newsContainer: {
    marginHorizontal: 15,
    marginTop: 45,
  },
  newsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  newsTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#002E80",
  },
  newsOptions: {
    fontSize: 20,
    color: "#002E80",
  },
  newsCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 12,
  },
  newsImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 12,
  },
  newsContent: {
    flex: 1,
  },
  newsText: {
    fontWeight: "600",
    color: "#1E1E1E",
    fontSize: 14,
    marginBottom: 4,
  },
  newsDate: {
    color: "#777",
    fontSize: 12,
  },

});
