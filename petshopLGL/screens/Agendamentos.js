import { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { dados } from '../screens/dados'
import { enviarNotificacao } from '../screens/Notificacoes'

const servicos = ['Banho', 'Tosa', 'Consulta']
const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const horas = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

// Botãozinho de escolha (serviço, dia, hora)
function Opcao({ texto, ativo, onPress }) {
  return (
    <TouchableOpacity style={[styles.opcao, ativo && { backgroundColor: '#ee7f2d' }]} onPress={onPress}>
      <Text style={{ color: ativo ? '#fff' : '#4a3b2e', fontWeight: 'bold' }}>{texto}</Text>
    </TouchableOpacity>
  )
}

export default function Agendamentos({ navigation, route }) {
  const [servico, setServico] = useState(route.params?.servico || 'Banho')
  const [pet, setPet] = useState(dados.pet)
  const [dia, setDia] = useState('')
  const [hora, setHora] = useState('')

  const confirmar = async () => {
    if (!pet || !dia || !hora) {
      Alert.alert('Preencha o nome do pet, o dia e a hora.')
      return
    }

    // Tipo 1: confirmação
    await enviarNotificacao('Agendamento confirmado ✅', `${servico} de ${pet} na ${dia} às ${hora}.`, 'Confirmação', 2)
    // Tipo 2: lembrete
    await enviarNotificacao('Lembrete ⏰', `Não esqueça do ${servico} de ${pet}!`, 'Lembrete', 10)

    Alert.alert('Agendado!', `${servico} na ${dia} às ${hora}.`)
    navigation.navigate('Home')
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Agendar</Text>

      <Text style={styles.rotulo}>Serviço</Text>
      <View style={styles.linha}>
        {servicos.map((s) => (
          <Opcao key={s} texto={s} ativo={servico === s} onPress={() => setServico(s)} />
        ))}
      </View>

      <Text style={styles.rotulo}>Nome do pet</Text>
      <TextInput style={styles.input} value={pet} onChangeText={setPet} />

      <Text style={styles.rotulo}>Dia</Text>
      <View style={styles.linha}>
        {dias.map((d) => (
          <Opcao key={d} texto={d} ativo={dia === d} onPress={() => setDia(d)} />
        ))}
      </View>

      <Text style={styles.rotulo}>Hora</Text>
      <View style={styles.linha}>
        {horas.map((h) => (
          <Opcao key={h} texto={h} ativo={hora === h} onPress={() => setHora(h)} />
        ))}
      </View>

      <TouchableOpacity style={styles.botao} onPress={confirmar}>
        <Text style={styles.botaoTexto}>Confirmar agendamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botao, { backgroundColor: '#66bbb6', marginBottom: 40 }]} onPress={() => navigation.goBack()}>
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e9ccad', padding: 20, paddingTop: 60 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#4a3b2e', marginBottom: 10 },
  rotulo: { fontSize: 16, fontWeight: 'bold', color: '#4a3b2e', marginTop: 14, marginBottom: 6 },
  input: { backgroundColor: '#fffaf3', borderRadius: 12, padding: 12 },
  linha: { flexDirection: 'row', flexWrap: 'wrap' },
  opcao: { backgroundColor: '#fffaf3', borderRadius: 12, padding: 10, marginRight: 8, marginBottom: 8 },
  botao: { backgroundColor: '#ee7f2d', borderRadius: 12, padding: 14, alignItems: 'center', marginTop: 14 },
  botaoTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
})