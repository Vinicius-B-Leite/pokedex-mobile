import React from "react";
import { Text, View } from "react-native";
import estilos from "./estilos";
import FotoPokemon from "./fotoPokemon";

interface Props{
    nomePokemon: string,
    tiposPokemon: string[],
    corDeFundo: string,
    fotoPokemon: string
}

export default function CardPokemon({nomePokemon, tiposPokemon, corDeFundo, fotoPokemon}: Props){
    const qualCorDeFundo = () => {
        
    }
    return(
        <View style={[estilos.card, {backgroundColor: corDeFundo}]}>
            <View style={estilos.conteiner}>
                <View style={estilos.descricao}>
                    <Text style={estilos.nomePokemon}>{nomePokemon}</Text>
                    {
                        tiposPokemon.map(tipoPokemon=>
                            <Text key={tipoPokemon} 
                            style={[estilos.tipos, {backgroundColor: 'light'+corDeFundo}]}
                                >{tipoPokemon}
                            </Text>
                        )
                    }
                </View>
                <FotoPokemon fotoPokemon={fotoPokemon}/>
            </View>
        </View>
    )
}