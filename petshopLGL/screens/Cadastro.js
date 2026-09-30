import { View, Text, TextInput, Button, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { cadastrar } from "../services/auth";

export default function Cadastro({navigation}){
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    async function realizarCadastro(){
    if (!email || !senha) {
    alert("Preencha todos os campos.")
    return
    }

    try {
        await cadastrar(email, senha)
        alert("Usuário cadastrado com sucesso!")
        navigation.navigate('Login')
    } catch(error) {
        alert("Não foi possível realizar o cadastro")
        console.log(error)
    }

 }

 return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Cadastro</Text>
            <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            />
            <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={styles.input}
            />

            <Button
            title='Cadastrar'
            onPress={realizarCadastro}
            style={styles.botao}
            />

        <View style={styles.login}>
            <Text>Já possui conta? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#3498db' }}>
            Faça login
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
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },
    
    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 13,
        color: "#222",
    },

    input: {
        height: 52,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 30,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: "#fff",
    },

    botao: {
        marginTop: 5,
        marginBottom: 12,
        borderRadius: 1000,
        overflow: "hidden",
    },

    login : {
        flexDirection: "row",
        marginTop: 10
    },
});