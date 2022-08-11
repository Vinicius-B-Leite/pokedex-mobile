import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../../paginas/home";
import DetalhesPokemon from "../../paginas/detalhesPokemon";
import { propsNavigationStack } from "./modelos";

const stack = createNativeStackNavigator<propsNavigationStack>();

export default function Stack() {
    return (
        <stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <stack.Screen name="Home" component={Home}/>
            <stack.Screen name="DetalhesPokemon" component={DetalhesPokemon} />
        </stack.Navigator>
    )
}