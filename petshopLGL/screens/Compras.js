import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { enviarNotificacao } from '../screens/Notificacoes'

const produtos = [
  { nome: 'Petisco', icone: 'bone', preco: 12.9 },
  { nome: 'Ração 1kg', icone: 'bowl-mix', preco: 29.9 },
  { nome: 'Bolinha', icone: 'tennis-ball', preco: 9.9 },
  { nome: 'Shampoo', icone: 'lotion', preco: 24.9 },
  { nome: 'Caminha', icone: 'bed', preco: 79.9 }
]

export default function Compras({ navigation }) {
  const [carrinho, setCarrinho] = useState([])

  const total = carrinho.reduce((soma, p) => soma + p.preco, 0)

  const finalizar = async () => {
    if (carrinho.length === 0) {
      Alert.alert('Seu carrinho está vazio.')
      return
    }
    await enviarNotificacao('Compra realizada', `Total: R$ ${total.toFixed(2).replace('.', ',')}`, 'Compra', 2)
    Alert.alert('Compra realizada!')
    setCarrinho([])
    navigation.navigate('Home')
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#e9ccad' }}>
      <ScrollView style={styles.container}>
        
        <View style={styles.tituloLinha}>
          <MaterialCommunityIcons 
          name="shopping" 
          size={30} 
          color="#4a3b2e" />
          <Text style={styles.titulo}>Produtos</Text>
        </View>

        {produtos.map((p) => (
          <View key={p.nome} style={styles.card}>
            <View style={styles.info}>
              <MaterialCommunityIcons name={p.icone} size={32} color="#ee7f2d" />
              <View style={{ marginLeft: 12 }}>
                <Text style={styles.nome}>{p.nome}</Text>
                <Text>R$ {p.preco.toFixed(2).replace('.', ',')}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.add} onPress={() => setCarrinho([...carrinho, p])}>
              <MaterialCommunityIcons name="plus" size={18} color="#4a3b2e" />
              <Text style={styles.addTexto}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>


      <View style={styles.rodape}>
        <View style={styles.totalLinha}>
          <MaterialCommunityIcons name="cart" size={22} color="#4a3b2e" />
          <Text style={styles.total}>
            {carrinho.length} item(ns) - Total: R$ {total.toFixed(2).replace('.', ',')}
          </Text>
        </View>

        <TouchableOpacity 
        style={styles.botao} 
        nPress={finalizar}>
          <MaterialCommunityIcons 
          name="cart-check" 
          size={20} 
          color="#fff" />
          <Text style={styles.botaoTexto}>Finalizar compra</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.botao, { backgroundColor: '#66bbb6' }]} 
        onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons 
          name="arrow-left" 
          size={20} 
          color="#fff" />
          <Text style={styles.botaoTexto}>Voltar</Text>
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

  tituloLinha: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10 
  },

  titulo: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#4a3b2e', 
    marginLeft: 8 
  },

  card: { 
    backgroundColor: '#fffaf3', 
    borderRadius: 12, 
    padding: 14, 
    marginBottom: 10, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },

  info: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },

  nome: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    color: '#4a3b2e' 
  },

  add: { 
    backgroundColor: '#eec45e', 
    borderRadius: 10, 
    padding: 10, 
    flexDirection: 'row', 
    alignItems: 'center' 
  },

  addTexto: { 
    fontWeight: 'bold', 
    color: '#4a3b2e', 
    marginLeft: 4 
  },

  rodape: { 
    backgroundColor: '#fffaf3', 
    padding: 16 
  },

  totalLinha: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },

  total: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    color: '#4a3b2e', 
    marginLeft: 6 
  },

  botao: { 
    backgroundColor: '#ee7f2d', 
    borderRadius: 12, 
    padding: 14, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 10 
  },

  botaoTexto: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginLeft: 8 
  }
})