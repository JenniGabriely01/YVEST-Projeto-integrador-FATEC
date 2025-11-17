import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import Menu from "../components/menu";
import Header from "../components/header";

export default function Home() {
  // visibilidade dos modais
  const [mainModalVisible, setMainModalVisible] = useState(false);
  const [actionModalVisible, setActionModalVisible] = useState(false);
  const [selectedAction, setSelectedAction] = useState(""); // "categoria" | "entrada" | "saida"

  // estados dos forms
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  // select custom
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);

  const categoriasMock = ["Finanças", "Educação", "Saúde", "Contas"];

  // Abre o modal secundário de ação
  const openActionModal = (action: string) => {
    setSelectedAction(action);
    setMainModalVisible(false);
    // reset pequenos estados
    setNomeCategoria("");
    setValor("");
    setCategoriaSelecionada("");
    setShowCategoryOptions(false);

    // abre modal da ação com um pequeno delay para ficar mais suave (opcional)
    // sem timer também funciona, mas deixei direto:
    setActionModalVisible(true);
  };

  // Função mock salvar (só fecha por enquanto)
  const handleSave = () => {
    // aqui você poderia validar e mandar pro backend depois
    console.log("Salvando:", { selectedAction, nomeCategoria, categoriaSelecionada, valor });
    setActionModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 220 }}>
        {/* Seção Valor Mensal */}
        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.label}>Valor mensal gasto</Text>
            <Text style={styles.value}>R$ 26.827,34</Text>
          </View>
          <TouchableOpacity>
            <Image source={require("../assets/icons/eye.png")} />
          </TouchableOpacity>
        </View>

        {/* 3 Cards principais */}
        <View style={styles.mainCardsRow}>
          <View style={styles.mainCard}>
            <Image source={require("../assets/icons/financas.png")} style={styles.mainCardIcon} />
            <Text style={styles.mainCardLabel}>Finanças</Text>
          </View>

          <View style={styles.mainCard}>
            <Image source={require("../assets/icons/despesas.png")} style={styles.mainCardIcon} />
            <Text style={styles.mainCardLabel}>Despesas</Text>
          </View>

          <View style={styles.mainCard}>
            <Image source={require("../assets/icons/historico.png")} style={styles.mainCardIcon} />
            <Text style={styles.mainCardLabel}>Histórico</Text>
          </View>
        </View>

        {/* Categorias */}
        <Text style={{ marginLeft: 15, marginTop: 25, fontWeight: "600" }}>Categorias</Text>

        <View style={styles.cardsRow}>
          {categoriasMock.map((item) => (
            <View style={styles.card} key={item}>
              <Image source={require("../assets/icons/financasCa.png")} style={styles.cardIcon} />
              <Text style={styles.cardLabel}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Notícias */}
        <View style={styles.newsContainer}>
          <View style={styles.newsHeader}>
            <Text style={styles.newsTitle}>Notícias Recentes</Text>
            <Text style={styles.newsOptions}>•••</Text>
          </View>

          <View style={styles.newsCard}>
            <Image source={require("../assets/icons/not1.png")} style={styles.newsImage} />
            <View style={styles.newsContent}>
              <Text style={styles.newsText}>
                Mercado financeiro registra queda preocupante após taxações dos EUA
              </Text>
              <Text style={styles.newsDate}>14/10/2025</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* BOTÃO + */}
      <TouchableOpacity style={styles.fab} onPress={() => setMainModalVisible(true)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* MODAL PRINCIPAL (3 OPÇÕES) */}
      <Modal transparent visible={mainModalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity style={styles.modalButton} onPress={() => openActionModal("categoria")}>
              <Text style={styles.modalButtonText}>Criar Categoria</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={() => openActionModal("entrada")}>
              <Text style={styles.modalButtonText}>Cadastrar Entrada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={() => openActionModal("saida")}>
              <Text style={styles.modalButtonText}>Cadastrar Saída</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setMainModalVisible(false)}>
              <Text style={styles.closeModal}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MODAL SECUNDÁRIO — FORMULÁRIOS */}
      <Modal transparent visible={actionModalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.formModal}>
            {/* Título */}
            <Text style={styles.formTitle}>
              {selectedAction === "categoria" ? "Criar Categoria" : selectedAction === "entrada" ? "Cadastrar Entrada" : "Cadastrar Saída"}
            </Text>

            {/* FORM: Criar Categoria */}
            {selectedAction === "categoria" && (
              <>
                <TextInput
                  placeholder="Nome da categoria"
                  style={styles.input}
                  value={nomeCategoria}
                  onChangeText={setNomeCategoria}
                />
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.saveButtonText}>Salvar Categoria</Text>
                </TouchableOpacity>
              </>
            )}

            {/* FORM: Entrada */}
            {selectedAction === "entrada" && (
              <>
                {/* Select custom */}
                <TouchableOpacity
                  style={styles.select}
                  onPress={() => setShowCategoryOptions((s) => !s)}
                >
                  <Text style={{ color: categoriaSelecionada ? "#000" : "#666" }}>
                    {categoriaSelecionada || "Selecione a categoria"}
                  </Text>
                </TouchableOpacity>

                {showCategoryOptions && (
                  <View style={styles.optionsBox}>
                    {categoriasMock.map((c) => (
                      <TouchableOpacity
                        key={c}
                        style={styles.optionItem}
                        onPress={() => {
                          setCategoriaSelecionada(c);
                          setShowCategoryOptions(false);
                        }}
                      >
                        <Text>{c}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}

                <TextInput
                  placeholder="Valor"
                  style={styles.input}
                  keyboardType="numeric"
                  value={valor}
                  onChangeText={setValor}
                />

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.saveButtonText}>Salvar Entrada</Text>
                </TouchableOpacity>
              </>
            )}

            {/* FORM: Saída */}
            {selectedAction === "saida" && (
              <>
                {/* Select custom */}
                <TouchableOpacity
                  style={styles.select}
                  onPress={() => setShowCategoryOptions((s) => !s)}
                >
                  <Text style={{ color: categoriaSelecionada ? "#000" : "#666" }}>
                    {categoriaSelecionada || "Selecione a categoria"}
                  </Text>
                </TouchableOpacity>

                {showCategoryOptions && (
                  <View style={styles.optionsBox}>
                    {categoriasMock.map((c) => (
                      <TouchableOpacity
                        key={c}
                        style={styles.optionItem}
                        onPress={() => {
                          setCategoriaSelecionada(c);
                          setShowCategoryOptions(false);
                        }}
                      >
                        <Text>{c}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}

                <TextInput
                  placeholder="Valor"
                  style={styles.input}
                  keyboardType="numeric"
                  value={valor}
                  onChangeText={setValor}
                />

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.saveButtonText}>Salvar Saída</Text>
                </TouchableOpacity>
              </>
            )}

            <TouchableOpacity onPress={() => setActionModalVisible(false)}>
              <Text style={styles.closeModal}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Menu onPlusPress={() => setMainModalVisible(true)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 25,
    alignItems: "center",
  },

  label: { fontSize: 18, color: "#3A3A3A" },
  value: { fontSize: 20, color: "#002E80", fontWeight: "700" },

  mainCardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 30,
  },

  mainCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    width: 110,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },

  mainCardIcon: { width: 22, height: 22, marginRight: 8 },
  mainCardLabel: { fontSize: 14, fontWeight: "600" },

  cardsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },

  card: {
    backgroundColor: "#fff",
    width: 90,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 4,
  },

  cardIcon: { width: 24, height: 24 },
  cardLabel: { fontSize: 12, marginTop: 4 },

  newsContainer: { marginTop: 30, paddingHorizontal: 15 },
  newsHeader: { flexDirection: "row", justifyContent: "space-between" },
  newsTitle: { fontWeight: "700", fontSize: 16, color: "#002E80" },
  newsOptions: { fontSize: 20, color: "#002E80" },

  newsCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    elevation: 3,
  },

  newsImage: { width: 80, height: 80, borderRadius: 10 },
  newsContent: { flex: 1, marginLeft: 10 },
  newsText: { fontWeight: "600" },
  newsDate: { color: "#777", fontSize: 12 },

  fab: {
    position: "absolute",
    bottom: 80,
    right: 25,
    width: 60,
    height: 60,
    backgroundColor: "#002E80",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  fabText: { color: "#fff", fontSize: 34, marginTop: -3 },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // escurece a tela por trás
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: 260,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 14,
    alignItems: "center",
  },

  modalButton: {
    backgroundColor: "#002E80",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  modalButtonText: { color: "#fff", fontSize: 15, fontWeight: "600" },

  closeModal: { color: "#002E80", marginTop: 10, fontWeight: "700" },

  formModal: {
    width: 320,
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
  },

  formTitle: { fontSize: 18, fontWeight: "700", marginBottom: 15 },

  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },

  select: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: "center",
  },

  optionsBox: {
    width: "100%",
    maxHeight: 140,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },

  optionItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },

  saveButton: {
    backgroundColor: "#002E80",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 6,
  },
  saveButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
