import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { dados } from '../screens/dados'
import { auth } from "../config/firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Perfil({ navigation }) {
  const realizarLogOut = () => {
    dados.notificacoes = []
    navigation.navigate('Login')
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F3EE' }}>
      <View style={styles.container}>
      <Image
          source={require("../assets/logodnv.png")}
          style={styles.logo}
       />
        <View style={styles.tituloArea}>
          <Text style={styles.titulo}>Perfil</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardCabecalho}>
            <View style={styles.avatar}>
              <MaterialCommunityIcons name="account" size={28} color="#D96F32" />
            </View>
            <View style={styles.cardCabecalhoTexto}>
              <Text style={styles.cardTitulo}>Dados da conta</Text>
              <Text style={styles.cardSubtitulo}>Suas informações de acesso</Text>
            </View>
          </View>

          <View style={styles.divisor} />

          <View style={styles.informacao}>
            <MaterialCommunityIcons name="email-outline" size={21} color="#D96F32" />
            <View style={styles.informacaoTexto}>
              <Text style={styles.label}>E-mail</Text>
              <Text style={styles.linha}>{auth.currentUser?.email}</Text>
            </View>
          </View>

          <View style={styles.informacao}>
            <MaterialCommunityIcons name="lock-outline" size={21} color="#D96F32" />
            <View style={styles.informacaoTexto}>
              <Text style={styles.label}>Senha</Text>
              <Text style={styles.linha}>{auth.currentUser?.senha}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.botao} onPress={realizarLogOut}>
          <View style={styles.iconeBotao}>
            <MaterialCommunityIcons name="logout" size={19} color="#D96F32" />
          </View>
          <Text style={styles.botaoTexto}>Sair da conta</Text>
          <MaterialCommunityIcons name="chevron-right" size={23} color="#D96F32" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuInferior}>

        <TouchableOpacity
                style={styles.itemMenu}
                onPress={() => navigation.navigate("Notificacoes")}
                >
                <MaterialCommunityIcons
                    name="bell-outline"
                    size={20}
                    color="#999999"
                />
                <Text style={styles.textoMenu}>
                    Notificações
                </Text>
                </TouchableOpacity>


                <TouchableOpacity
                style={styles.itemMenu}
                onPress={() => navigation.navigate("Home")}
                >
                <MaterialCommunityIcons
                    name="home"
                    size={20}
                    color="#999999"
                />
                <Text style={styles.textoMenu}>
                    Home
                </Text>
                </TouchableOpacity>


                <TouchableOpacity
                style={styles.itemMenu}
                onPress={() => navigation.navigate("Perfil")}
                >
                <MaterialCommunityIcons
                    name="paw"
                    size={35}
                    color="#EE7F2D"
                />
                <Text style={[styles.textoMenu, { color: "#EE7F2D" }]}>
                    Perfil
                </Text>
                </TouchableOpacity>

            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 55,
    paddingBottom: 100,
  },

  logo: {
    width: 135,
    height: 135,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 2,
  },

  tituloArea: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3E342C',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E9DED2',
    shadowColor: '#5A4636',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 7,
    elevation: 3,
  },

  cardCabecalho: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#FBE1D2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  cardCabecalhoTexto: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A3B32",
  },

  cardSubtitulo: {
    fontSize: 12,
    color: "#92877E",
    marginTop: 3,
  },

  divisor: {
    height: 1,
    backgroundColor: "#EEE5DC",
    marginVertical: 17,
  },

  informacao: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },

  informacaoTexto: {
    flex: 1,
    marginLeft: 12,
  },

  label: {
    fontSize: 11,
    color: "#A49B93",
    marginBottom: 3,
  },

  linha: {
    fontSize: 14,
    color: "#4A3B32",
    fontWeight: "600",
  },

  botao: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 13,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9DED2",
    shadowColor: "#5A4636",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  iconeBotao: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#FBE1D2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  botaoTexto: {
    flex: 1,
    color: '#4A3B32',
    fontWeight: 'bold',
    fontSize: 15,
  },

  menuInferior: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 999,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.04,
    shadowRadius: 5,
  },

  itemMenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textoMenu: {
    fontSize: 11,
    color: "#999999",
    marginTop: 3,
  }
})