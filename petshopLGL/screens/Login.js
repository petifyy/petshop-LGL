import { View, Text, TextInput, Button, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { entrar } from "../services/auth";

export default function Cadastro({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function realizarLogin(){
        if (!email || !senha) {
            alert("Preencha todos os campos.")
            return
        }
        try {
            await entrar(email, senha)
            navigation.navigate('Home')
        } catch(error) {
            alert("Email ou senha inválidos.")
            console.log(error)
        }
     }    

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Fazer login</Text>

            <View style={styles.card}>
                <Text style={styles.rotulo}>E-mail</Text>

                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                        name="email-outline"
                        size={21}
                        color="#D96F32"
                    />

                    <TextInput
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#A49B93"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>

                <Text style={styles.rotulo}>Senha</Text>

                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                        name="lock-outline"
                        size={21}
                        color="#D96F32"
                    />

                    <TextInput
                        placeholder="Digite sua senha"
                        placeholderTextColor="#A49B93"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                        style={styles.input}
                    />
                </View>

                <View style={styles.botao}>
                    <Button
                        title="Entrar"
                        onPress={realizarLogin}
                        color="#D96F32"
                    />
                </View>
            </View>

            <View style={styles.login}>
                <Text style={styles.loginTexto}>Não possui conta? </Text>

                <Pressable onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.loginLink}>
                        Cadastre-se
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        backgroundColor: "#F7F3EE",
    },

    titulo: {
        fontSize: 29,
        fontWeight: "bold",
        textAlign: "center",
        color: "#3E342C",
        marginBottom: 20
    },

    subtitulo: {
        fontSize: 13,
        color: "#92877E",
        textAlign: "center",
        marginTop: 6,
        marginBottom: 25,
    },

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: "#E9DED2",
        shadowColor: "#5A4636",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.07,
        shadowRadius: 8,
        elevation: 3,
    },

    rotulo: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#4A3B32",
        marginBottom: 8,
    },

    inputContainer: {
        height: 52,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7F3EE",
        borderRadius: 14,
        borderWidth: 1,
        borderColor: "#E9DED2",
        paddingHorizontal: 14,
        marginBottom: 17,
    },

    input: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 10,
        fontSize: 15,
        color: "#3E342C",
    },

    botao: {
        marginTop: 3,
        borderRadius: 14,
        overflow: "hidden",
    },

    login: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    loginTexto: {
        color: "#92877E",
        fontSize: 14,
    },

    loginLink: {
        color: "#D96F32",
        fontWeight: "bold",
        fontSize: 14,
    },
})