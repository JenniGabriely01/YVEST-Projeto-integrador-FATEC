import Menu from "@/components/menu";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Header from "../components/header";

export default function Historico() {
  const styles = StyleSheet.create({
    title: {
      fontSize: 16,
      color: "#122C4F",
      fontWeight: 600,

    },
    container: {
      paddingHorizontal: 15,
      gap: 40,
      display: "flex",
      flexDirection: "column"

    },
    initialcontainer: {
      backgroundColor: "#FFF",

    },
    date: {
      fontSize: 12,
      color: "#7F7F7F",
      fontWeight: 500,
    },
    block: {
      display: "flex",
      flexDirection: "column",
      gap: 34,
    },
    listHistoric: {
      display: "flex",
      flexDirection: "column",
      gap: 15,
    },
    enterend: {
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: "#B3B3B3"
    },
    icon: {
      width: 30,
      height: 30,
      alignContent: "flex-start",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      display: "flex"
    },
    financecount: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    texteditcount: {
      color: "#122C4F",
      fontSize: 12,
      fontWeight: 500
    },
    textvalue: {
      fontSize: 17,
      color: "#084DA6",
      fontWeight: 700
    }
  })
  return (
    <>
      <View style={styles.initialcontainer}>
        <Header />
        <View style={styles.container}>
          <Text style={styles.title}>Histórico</Text>
          <View style={styles.block}>
            <View style={styles.listHistoric}>
              <Text style={styles.date}>12 de outubro de 2025</Text>
              <View style={styles.enterend}>
                <Image style={styles.icon}
                  source={require("../assets/icons/entrada.svg")}></Image>
                <View style={styles.financecount}>
                  <Text style={styles.texteditcount}>Entrada • Finanças</Text>
                  <Text style={styles.textvalue}>R$20,00</Text>
                </View>
              </View>
            </View>

            <View style={styles.listHistoric}>
              <Text style={styles.date}>12 de outubro de 2025</Text>
              <View style={styles.enterend}>
                <Image style={styles.icon}
                  source={require("../assets/icons/saida.svg")}></Image>
                <View style={styles.financecount}>
                  <Text style={styles.texteditcount}>Saída • Contas</Text>
                  <Text style={styles.textvalue}>R$20,00</Text>
                </View>
              </View>
            </View>

            <View style={styles.listHistoric}>
              <Text style={styles.date}>12 de outubro de 2025</Text>
              <View style={styles.enterend}>
                <Image style={styles.icon}
                  source={require("../assets/icons/entrada.svg")}></Image>
                <View style={styles.financecount}>
                  <Text style={styles.texteditcount}>Entrada</Text>
                  <Text style={styles.textvalue}>R$20,00</Text>
                </View>
              </View>
            </View>

            <View style={styles.listHistoric}>
              <Text style={styles.date}>12 de outubro de 2025</Text>
              <View style={styles.enterend}>
                <Image style={styles.icon}
                  source={require("../assets/icons/saida.svg")}></Image>
                <View style={styles.financecount}>
                  <Text style={styles.texteditcount}>Saída</Text>
                  <Text style={styles.textvalue}>R$80,00</Text>
                </View>
              </View>
            </View>

            <View style={styles.listHistoric}>
              <Text style={styles.date}>12 de outubro de 2025</Text>
              <View style={styles.enterend}>
                <Image style={styles.icon}
                  source={require("../assets/icons/entrada.svg")}></Image>
                <View style={styles.financecount}>
                  <Text style={styles.texteditcount}>Entrada</Text>
                  <Text style={styles.textvalue}>R$20,00</Text>
                </View>
              </View>
            </View>

          </View>
        </View>
      </View>
      <Menu />
    </>
  );
}