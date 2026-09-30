import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";
import Notificacoes from "./screens/Notificacoes";
import Agendamentos from "./screens/Agendamentos";
import Compras from "./screens/Compras";
import Perfil from "./screens/Perfil";

const Stack = createNativeStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Notificacoes' component={Notificacoes} options={{headerShown: false}}/>
        <Stack.Screen name='Agendamentos' component={Agendamentos} options={{headerShown: false}}/>
        <Stack.Screen name='Compras' component={Compras} options={{headerShown: false}}/>
        <Stack.Screen name='Perfil' component={Perfil} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}