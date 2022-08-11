import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import estilos from "./estilos";
import FotoPokemon from "./fotoPokemon";

interface Props{
    nomePokemon: string,
    tiposPokemon: string[],
    corDeFundo: string,
    fotoPokemon: string,
    click: () => void
}

export default function CardPokemon({nomePokemon, tiposPokemon, corDeFundo, fotoPokemon, click}: Props){
    const qualCorDeFundo = () => {
        if (corDeFundo == "red") return "#fa2a28"
        if (corDeFundo == 'blue') return '#37a5c6'
        if (corDeFundo == "green") return '#14a06f'
        if (corDeFundo == 'yellow') return '#f7a61b'
    }
    return(
        <TouchableOpacity style={[estilos.card, {backgroundColor: qualCorDeFundo()}]} onPress={() => click()}>
            <View style={estilos.conteiner}>
                <View style={estilos.descricao}>
                    <Text style={estilos.nomePokemon}>{nomePokemon}</Text>
                    {
                        tiposPokemon.map(tipoPokemon=>
                            <Text key={tipoPokemon} 
                            style={[estilos.tipos, {backgroundColor: corDeFundo == 'red' ? "orangered" : 'light'+corDeFundo}]}
                                >{tipoPokemon}
                            </Text>
                        )
                    }
                </View>
                <FotoPokemon fotoPokemon={fotoPokemon}/>
            </View>
        </TouchableOpacity>
    )
}