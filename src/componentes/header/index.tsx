import React from "react";
import { Text, TextInput, View } from "react-native";
import estilos from "./estilos";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={estilos.header}>
            <MaterialCommunityIcons name="pokeball" size={30} color="black" />
                <TextInput style={estilos.campoDeBusca} />
            <FontAwesome name="search" size={20} color="black" />
        </View>
    )
}