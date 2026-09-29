import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { auth } from "../config/firebase";
import { sair } from "../services/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { dados } from '../screens/dados'

export default function Home({ navigation }) {

    async function realizarLogOut() {
        await sair()
        navigation.navigate('Login')
    }

    let [passo, setPasso] = useState(0);

    return (
        <View style={styles.tela}>
            <ScrollView contentContainerStyle={styles.container}>
            <View style={{ flex: 1, backgroundColor: '#e9ccad' }}>
                <View style={styles.container}>

                    <Text style={styles.logo}>PetZEN</Text>
                    <Text style={styles.ola}>Olá, {dados.nome}!</Text>
            
                    <TouchableOpacity 
                    style={[styles.card, { backgroundColor: '#66bbb6' }]} 
                    onPress={() => navigation.navigate('Agendamentos', { servico: 'Banho' })}
                    >
                    <Text style={styles.cardTexto}>🛁 Agende seu banho</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={[styles.card, { backgroundColor: '#eec45e' }]} 
                    onPress={() => navigation.navigate('Agendamentos', { servico: 'Tosa' })}
                    > <Text style={styles.cardTexto}>✂️ Agende sua tosa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={[styles.card, { backgroundColor: '#ee7f2d' }]} 
                    onPress={() => navigation.navigate('Agendamentos', { servico: 'Consulta' })}
                    > <Text style={styles.cardTexto}>🩺 Agende sua consulta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={[styles.card, { backgroundColor: '#fffaf3' }]} 
                    onPress={() => navigation.navigate('Compras')}
                    > <Text style={styles.cardTexto}>🛍️ Compre nossos produtos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>

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
                    size={25}
                    color="#EE7F2D"
                />
                <Text style={[styles.textoMenu, { color: "#EE7F2D" }]}>
                    Home
                </Text>
                </TouchableOpacity>


                <TouchableOpacity
                style={styles.itemMenu}

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
    tela: {
        flex: 1,
        backgroundColor: "#f5f9fc",
    },

    container: {
        paddingHorizontal: 25,
        paddingTop: 30,
        paddingBottom: 90,
    },

    conteudo: {
        alignItems: "center",
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#3498db",
        marginBottom: 15,
    },

    card: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 20,
        marginBottom: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },

    cardTitulo: {
        fontSize: 14,
        color: "#888",
    },

    email: {
        fontSize: 17,
        fontWeight: "600",
        color: "#3498db",
    },

    descricao: {
        fontSize: 17,
        color: "#555",
        lineHeight: 25,
        marginBottom: 25,
    },

    botao: {
        marginTop: 5,
        marginBottom: 12,
        borderRadius: 5,
        overflow: "hidden",
        width: "100%",
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