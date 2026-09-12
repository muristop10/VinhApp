import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#722F37',
  primaryDark: '#3B1318',
  primaryLight: '#A34854',
  background: '#FAF8F5',
  golden: '#D3AF37',
  surface: '#FFFFFF',
  textDark: '#2A1B18',
  textLight: '#8C7A77',
  border: '#EBE3E0',
  white: '#FFFFFF',
};

const buttonShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.12,
  shadowRadius: 3,
  elevation: 2,
};

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: colors.background },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  // Títulos
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  tituloh2: {
    fontSize: 22,
    marginTop: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 6,
    textAlign: 'center',
  },
  span: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 20,
    textAlign: 'center',
  },

  // Cards
  card: {
    width: '48%', // Exatamente 2 colunas lado a lado
    maxWidth: 200,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardData: { alignItems: 'center', marginBottom: 12 },
  imagemVinho: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  nomeVinho: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textDark,
    textAlign: 'center',
    marginBottom: 4,
  },
  precoVinho: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 4,
  },
  botaoComprar: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    ...buttonShadow,
  },
  comprarText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 13,
    textTransform: 'uppercase',
  },

  // Formulário
  formulario: {
    backgroundColor: colors.surface,
    padding: 16,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  formularioCampo: { marginBottom: 16 },
  formularioLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textDark,
    marginVertical: 16,
  },
  formInput: {
    backgroundColor: colors.background,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
    color: colors.textDark,
    fontSize: 14,
    marginBottom: 8,
  },
  formularioBotaoView: { marginTop: 16, alignItems: 'center' },
  formularioBotao: {
    backgroundColor: colors.primary,
    color: colors.white, // Texto branco para contraste perfeito
    fontFamily: 'Arial',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    width: '100%',
    ...buttonShadow,
  },

  // Carrinho
  carrinho: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  carrinhoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  carrinhoItems: { marginBottom: 12 },
  carrinhoTotal: {
    borderTopWidth: 1,
    borderColor: colors.border,
    paddingTop: 12,
    marginBottom: 16,
  },
  carrinhoTotalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  carrinhoBotaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Botão Principal (Vinho Sólido + Texto Branco)
  carrinhoBotaoPrimario: {
    backgroundColor: colors.primary,
    color: colors.golden,
    paddingVertical: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    ...buttonShadow,
  },

  carrinhoBotaoPrimarioText: {
    color: colors.white
  },

  // Botão Secundário (Outline Limpo com Alto Contraste)
  carrinhoBotaoSecundario: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    ...buttonShadow,
  },

  // Itens do Carrinho
  carrinhoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.background,
  },
  carrinhoInfo: { flex: 1 },
  carrinhoNome: { fontSize: 14, fontWeight: '600', color: colors.textDark },
  carrinhoPreco: { fontSize: 13, color: colors.primary },
  buttonsView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  opButton: { padding: 4 },
  quantidadeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textDark,
    marginHorizontal: 8,
  },

  // Filtro
  filtro: {
    backgroundColor: colors.surface,
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,

    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  labelFiltro: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 8,
  },
});
