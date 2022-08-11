import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "./estilos";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


interface Props{
    click?: ()=>void,
    focar?: boolean
}
export default function Header({click, focar}: Props){
    return(
        <View style={estilos.header}>
            <MaterialCommunityIcons name="pokeball" size={30} color="black"/>
            <TouchableOpacity onPress={click} style={estilos.campoDeTexto}>
                <TextInput style={estilos.input} onPressIn={click} autoFocus={focar}/>
                <FontAwesome name="search" size={20} color="black" />
            </TouchableOpacity>
        </View>
    )
}