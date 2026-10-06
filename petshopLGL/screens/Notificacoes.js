import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native'
import * as Notifications from 'expo-notifications'
import { dados } from '../screens/dados'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export async function enviarNotificacao(titulo, corpo, tipo, segundos) {
  const { status } = await Notifications.getPermissionsAsync()

  if (status !== 'granted') {
    Alert.alert('Permissão negada.')
    return
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: titulo,
      body: corpo,
      data: { tipo }
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: segundos
    }
  })
}

export default function Notificacoes({ navigation }) {
  const [lista, setLista] = useState([...dados.notificacoes])

  useEffect(() => {
    const atualizar = () => setLista([...dados.notificacoes])
    dados.aoReceber = atualizar
    const sub = navigation.addListener('focus', atualizar)

    return () => {
      dados.aoReceber = null
      sub()
    }
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#F7F3EE' }}>
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Notificações</Text>

        {lista.length === 0 && (
          <Text>Nenhuma notificação ainda.</Text>
        )}

        {lista.map((n, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.tipo}>
              {n.tipo} - {n.hora}
            </Text>
            <Text style={{ fontWeight: 'bold' }}>
              {n.titulo}
            </Text>
            <Text>{n.corpo}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.menuInferior}>

        <TouchableOpacity
                style={styles.itemMenu}
                onPress={() => navigation.navigate("Notificacoes")}
                >
                <MaterialCommunityIcons
                    name="bell-outline"
                    size={35}
                    color="#EE7F2D"
                />
                <Text style={[styles.textoMenu, { color: "#EE7F2D" }]}>
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
                    size={20}
                    color="#999999"
                />
                <Text style={styles.textoMenu}>
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
    paddingTop: 60,
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
    padding: 12, 
    marginBottom: 10 
  },

  tipo: { 
    color: '#ee7f2d', 
    fontWeight: 'bold', 
    marginBottom: 4 
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