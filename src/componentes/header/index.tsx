import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "./estilos";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { buscarPokemon } from '../../funcao/buscarPokemon/index'
import { IPokemonInicial } from "../../interfaces/IPokemonIniciais";

interface Props{
    click?: ()=>void,
    focar?: boolean,
    visivel: boolean,
    setPokemon?: React.Dispatch<React.SetStateAction<IPokemonInicial | undefined>>
}
export default function Header({click, focar, visivel, setPokemon}: Props){

    const [texto, setTexto] = useState<string>('')

    return(
        <View style={estilos.header}>
            <MaterialCommunityIcons name="pokeball" size={30} color="black"/>
            <TouchableOpacity onPress={click} style={estilos.campoDeTexto}>
                <TextInput 
                    enablesReturnKeyAutomatically={true}
                    style={[estilos.input,
                        visivel ? {display: 'flex'} : {display: 'none'}]} 
                    onPressIn={click} 
                    autoFocus={focar}
                    defaultValue={texto}
                    onChangeText={ (txt: string) => setTexto ? setTexto(txt) : ""}
                    onSubmitEditing={() =>setPokemon? buscarPokemon(texto.replace(' ', ''), setPokemon) : console.log("erro setPokemon")}
                />
                <FontAwesome name="search" size={20} color="black" />
            </TouchableOpacity>
        </View>
    )
}