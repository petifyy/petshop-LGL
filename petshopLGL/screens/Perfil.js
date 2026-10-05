import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { dados } from '../screens/dados'
import { auth } from "../config/firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Perfil({ navigation }) {
  const realizarLogOut= () => {
    dados.notificacoes = []
    navigation.navigate('Login')
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#e9ccad' }}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Perfil</Text>

        <View style={styles.card}>
          <Text style={styles.linha}>E-mail: {auth.currentUser?.email}</Text>
          <Text style={styles.linha}>Senha:  {auth.currentUser?.senha}</Text>
        </View>

        <TouchableOpacity style={styles.botao} onPress={realizarLogOut}>
          <Text style={styles.botaoTexto}>Sair</Text>
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
            size={35}
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
            size={20}
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
    paddingTop: 60 
},

  titulo: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#4a3b2e', 
    marginBottom: 10 
},

  card: { 
    backgroundColor: '#fffaf3', 
    borderRadius: 12, 
    padding: 16 
},

  linha: { 
    fontSize: 16, 
    color: '#4a3b2e', 
    marginVertical: 6 
},

  botao: { 
    backgroundColor: '#ee7f2d', 
    borderRadius: 12, 
    padding: 14, 
    alignItems: 'center', 
    marginTop: 20 
},

  botaoTexto: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
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
  },
})