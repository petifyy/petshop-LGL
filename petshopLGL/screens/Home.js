import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
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
        <View style={styles.tela}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.conteudo}>

                    <Image
                        source={require("../assets/logodnv.png")}
                        style={styles.logo}
                    />

                    <Text style={styles.titulo}>Olá, {auth.currentUser?.email}!</Text>

                    <View style={styles.mensagem}>
                        <View style={styles.mensagemIcone}>
                            <MaterialCommunityIcons
                                name="paw"
                                size={27}
                                color="#D96F32"
                            />
                        </View>
                        <View style={styles.mensagemConteudo}>
                            <Text style={styles.mensagemTitulo}>Cuide de quem sempre está ao seu lado</Text>
                            <Text style={styles.mensagemTexto}>Agende serviços, cuide da saúde e encontre tudo para o seu pet.</Text>
                        </View>
                    </View>

                    <Text style={styles.subtitulo}>O que você precisa?</Text>

                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Agendamentos', { servico: 'Banho' })}
                    >
                        <View style={[styles.iconeCard, { backgroundColor: '#DDF2EF' }]}>
                            <MaterialCommunityIcons
                                name="shower"
                                size={25}
                                color="#4CA8A0"
                            />
                        </View>
                        <View style={styles.cardConteudo}>
                            <Text style={styles.cardTitulo}>Agende um banho</Text>
                            <Text style={styles.cardTexto}>Deixe seu pet limpinho e cheiroso</Text>
                        </View>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={24}
                            color="#B5AAA0"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Agendamentos', { servico: 'Tosa' })}
                    >
                        <View style={[styles.iconeCard, { backgroundColor: '#FFF1C9' }]}>
                            <MaterialCommunityIcons
                                name="scissors-cutting"
                                size={25}
                                color="#D29C21"
                            />
                        </View>
                        <View style={styles.cardConteudo}>
                            <Text style={styles.cardTitulo}>Agende uma tosa</Text>
                            <Text style={styles.cardTexto}>Mantenha seu pet confortável</Text>
                        </View>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={24}
                            color="#B5AAA0"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Agendamentos', { servico: 'Consulta' })}
                    >
                        <View style={[styles.iconeCard, { backgroundColor: '#FBE1D2' }]}>
                            <MaterialCommunityIcons
                                name="doctor"
                                size={25}
                                color="#D96F32"
                            />
                        </View>
                        <View style={styles.cardConteudo}>
                            <Text style={styles.cardTitulo}>Agende uma consulta</Text>
                            <Text style={styles.cardTexto}>Cuide da saúde do seu melhor amigo</Text>
                        </View>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={24}
                            color="#B5AAA0"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.compras}
                        onPress={() => navigation.navigate('Compras')}
                    >
                        <View style={styles.iconeCompras}>
                            <MaterialCommunityIcons
                                name="shopping"
                                size={27}
                                color="#FFFFFF"
                            />
                        </View>
                        <View style={styles.comprasConteudo}>
                            <Text style={styles.comprasTitulo}>Compre nossos produtos</Text>
                            <Text style={styles.comprasTexto}>Tudo que seu pet precisa em um só lugar</Text>
                        </View>
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={25}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>

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
                    size={35}
                    color="#EE7F2D"
                />
                <Text style={[styles.textoMenu, { color: "#EE7F2D" }]}>
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
    tela: {
        flex: 1,
        backgroundColor: "#F7F3EE",
    },

    container: {
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 100,
    },

    conteudo: {
        alignItems: "stretch",
    },

    logo: {
        width: 135,
        height: 135,
        alignSelf: "center",
        resizeMode: "contain",
        marginBottom: 2,
    },

    titulo: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#3E342C",
        marginBottom: 22,
    },

    mensagem: {
        width: "100%",
        backgroundColor: "#66bbb6",
        borderRadius: 18,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#E9DED2",
        shadowColor: "#5A4636",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.07,
        shadowRadius: 7,
        elevation: 2,
    },

    mensagemIcone: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#DDF2EF",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    mensagemConteudo: {
        flex: 1,
    },

    mensagemTitulo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },

    mensagemTexto: {
        fontSize: 12,
        color: "#F7F3EE",
        lineHeight: 17,
    },

    subtitulo: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#4A3B32",
        marginBottom: 12,
    },

    card: {
        width: "100%",
        minHeight: 75,
        backgroundColor: "#FFFFFF",
        borderRadius: 17,
        padding: 12,
        marginBottom: 11,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E9DED2",
        shadowColor: "#5A4636",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 5,
        elevation: 2,
    },

    iconeCard: {
        width: 50,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 13,
    },

    cardConteudo: {
        flex: 1,
    },

    cardTitulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#4A3B32",
        marginBottom: 3,
    },

    cardTexto: {
        fontSize: 12,
        color: "#92877E",
        lineHeight: 16,
    },

    compras: {
        width: "100%",
        minHeight: 75,
        backgroundColor: "#D96F32",
        borderRadius: 17,
        padding: 12,
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#A84F21",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.18,
        shadowRadius: 6,
        elevation: 4,
    },

    iconeCompras: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: "rgba(255,255,255,0.18)",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 13,
    },

    comprasConteudo: {
        flex: 1,
    },

    comprasTitulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 3,
    },

    comprasTexto: {
        fontSize: 12,
        color: "#FFF1E8",
        lineHeight: 16,
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