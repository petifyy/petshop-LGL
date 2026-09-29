import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { enviarNotificacao } from '../screens/Notificacoes'

const produtos = [
  { nome: '🦴 Petisco', preco: 12.9 },
  { nome: '🥣 Ração 1kg', preco: 29.9 },
  { nome: '🎾 Bolinha', preco: 9.9 },
  { nome: '🧴 Shampoo', preco: 24.9 },
  { nome: '🛏️ Caminha', preco: 79.9 }
]

export default function Compras({ navigation }) {
  const [carrinho, setCarrinho] = useState([])

  const total = carrinho.reduce((soma, p) => soma + p.preco, 0)

  const finalizar = async () => {
    if (carrinho.length === 0) {
      Alert.alert('Seu carrinho está vazio.')
      return
    }
    await enviarNotificacao('Compra realizada 🛍️', `Total: R$ ${total.toFixed(2).replace('.', ',')}`, 'Compra', 2)
    Alert.alert('Compra realizada!')
    setCarrinho([])
    navigation.navigate('Home')
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#e9ccad' }}>
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Produtos</Text>

        {produtos.map((p) => (
          <View key={p.nome} style={styles.card}>
            <View>
              <Text style={styles.nome}>{p.nome}</Text>
              <Text>R$ {p.preco.toFixed(2).replace('.', ',')}</Text>
            </View>
            <TouchableOpacity style={styles.add} onPress={() => setCarrinho([...carrinho, p])}>
              <Text style={styles.addTexto}>+ Adicionar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.rodape}>
        <Text style={styles.total}>
          {carrinho.length} item(ns) - Total: R$ {total.toFixed(2).replace('.', ',')}
        </Text>
        <TouchableOpacity style={styles.botao} onPress={finalizar}>
          <Text style={styles.botaoTexto}>Finalizar compra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#66bbb6' }]} onPress={() => navigation.goBack()}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#4a3b2e', marginBottom: 10 },
  card: { backgroundColor: '#fffaf3', borderRadius: 12, padding: 14, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nome: { fontWeight: 'bold', fontSize: 16, color: '#4a3b2e' },
  add: { backgroundColor: '#eec45e', borderRadius: 10, padding: 10 },
  addTexto: { fontWeight: 'bold', color: '#4a3b2e' },
  rodape: { backgroundColor: '#fffaf3', padding: 16 },
  total: { fontWeight: 'bold', fontSize: 16, color: '#4a3b2e', textAlign: 'center' },
  botao: { backgroundColor: '#ee7f2d', borderRadius: 12, padding: 14, alignItems: 'center', marginTop: 10 },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
})