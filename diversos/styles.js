import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  // app.js
  titulo: {
    fontSize: 25,
    color: "#722F37",
    fontWeight: "bold",
    alignSelf: "center",
    margin: 16,
  },

  // card
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  cardData: {
    alignItems: "center",
    marginBottom: 12,
  },
  nomeVinho: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A0E17",
    textAlign: "center",
    marginBottom: 4,
  },
  precoVinho: {
    fontSize: 16,
    fontWeight: "600",
    color: "#D4AF37",
    marginBottom: 12,
  },
  imagemVinho: {
    width: Dimensions.get("window").width - 64,
    height: 150,
    resizeMode: "contain",
    marginBottom: 12,
  },
  teorAlcoolVinho: {
    fontSize: 14,
    color: "#666666",
    fontStyle: "italic",
  },
  botaoComprar: {
    backgroundColor: "#722F37",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  comprarText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  // carrinho
  carrinho: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  carrinhoLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A0E17",
  },

  // carrinho itens
  carrinhoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  carrinhoInfo: {
    flex: 1,
    marginRight: 10,
  },
  carrinhoNome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A0E17",
  },
  carrinhoPreco: {
    fontSize: 14,
    color: "#666666",
    marginTop: 4,
  },
  buttonsView: {
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
  },
  opButton: {
    cursor: "pointer",
  },
  quantidadeText: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  formularioCampo: {
    marginBottom: 12,
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  formularioLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  formularioResultado: {
    alignItems: "center",
    marginTop: 20,
  },
  formularioResultadoImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: "contain",
  },
});
