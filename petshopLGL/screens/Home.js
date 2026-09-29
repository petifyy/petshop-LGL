import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { auth } from "../config/firebase";
import { sair } from "../services/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";


    export default function Home({ navigation }) {

        async function realizarLogOut() {
        await sair()
        navigation.navigate('Login')
        }

        let [passo, setPasso] = useState(0);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Olá, seja bem-vindo(a)!</Text>
                
                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Sua conta</Text>
                    <Text style={styles.email}>{auth.currentUser?.email}</Text>
                </View>
                
                <Text style={styles.titulo}>Manual - Firebase Authentication com React Native</Text>
                <Text style={styles.descricao}>Laura Lisboa e Giovanna Cintra</Text>
                
                   
                
                    <View style={styles.botao}>
                    <Button
                    title="Sair"
                    onPress={realizarLogOut}
                    />
                    </View>

                    <View style={styles.menuInferior}>

                        <TouchableOpacity
                        style={styles.itemMenu}
                        
                        >
                        <MaterialCommunityIcons
                            name="bell-outline"
                            size={20}
                            color="#999999"
                        />
                        <Text style={[styles.textoMenu, { color: "#2E98FE" }]}>
                            Notificações
                        </Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                        style={styles.itemMenu}
                        
                        >
                        <MaterialCommunityIcons
                            name="monitor-cellphone"
                            size={25}
                            color="#EE7F2D"
                        />
                        <Text style={styles.textoMenu}>
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
        </ScrollView>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f9fc",
        justifyContent: "center",
        paddingHorizontal: 25,
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

    mensagem: {
        fontSize: 15,
        color: "#666",
        textAlign: "center",
        lineHeight: 22,
        marginBottom: 25,
    },

    botao: {
        marginTop: 5,
        marginBottom: 12,
        borderRadius: 5,
        overflow: "hidden",
        width: "100%",
        },

    card1: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 25,
        marginBottom: 20,
        width: "100%",
        minHeight: 200,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    
    descricao: {
        fontSize: 17,
        color: "#555",
        lineHeight: 25,
        marginBottom: 25,
    },

    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: 10,
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
        fontFamily: "Nunito",
        fontSize: 11,
        color: "#999999",
        marginTop: 3,
      },
});