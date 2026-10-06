import { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { dados } from '../screens/dados'
import { enviarNotificacao } from '../screens/Notificacoes'
import { Ionicons } from "@expo/vector-icons";

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

    await enviarNotificacao('Agendamento confirmado ✅', `${servico} de ${pet} na ${dia} às ${hora}.`, 'Confirmação', 2)
    await enviarNotificacao('Lembrete ⏰', `Não esqueça do ${servico} de ${pet}!`, 'Lembrete', 10)

    Alert.alert('Agendado!', `${servico} na ${dia} às ${hora}.`)
    navigation.navigate('Home')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={22} color="#4a3b2e" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Agendar</Text>
      </View>

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
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F3EE',
      padding: 20,
      paddingTop: 60,
    },
  
    head: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
      paddingVertical: 14,
      paddingHorizontal: 16,
    },
  
    titulo: {
      fontSize: 23,
      fontWeight: 'bold',
      color: '#3E342C',
      marginLeft: 12,
    },
  
    rotulo: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#5A4636',
      marginTop: 18,
      marginBottom: 10,
    },
  
    input: {
      backgroundColor: '#FFFFFF',
      borderRadius: 14,
      paddingHorizontal: 15,
      paddingVertical: 13,
      color: '#3E342C',
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#E4D9CC',
      shadowColor: '#5A4636',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 5,
      elevation: 2,
    },
  
    linha: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  
    opcao: {
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      paddingVertical: 11,
      paddingHorizontal: 17,
      marginRight: 9,
      marginBottom: 9,
      borderWidth: 1,
      borderColor: '#E4D9CC',
      shadowColor: '#5A4636',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
  
    botao: {
      backgroundColor: '#D96F32',
      borderRadius: 15,
      paddingVertical: 15,
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
      shadowColor: '#A84F21',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
    },
  
    botaoTexto: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
})