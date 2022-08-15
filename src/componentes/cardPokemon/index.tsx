import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { qualCorDeFundo } from "../../funcao/buscarPokemon/corPokemon/qualCorDeFundo";
import { qualCorDeFundoTexto } from "../../funcao/buscarPokemon/corPokemon/qualCorDeFundoTexto";
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
    

    
    return(
        <TouchableOpacity style={[estilos.card, {backgroundColor: qualCorDeFundo(corDeFundo)}]} onPress={() => click()}>
            <View style={estilos.conteiner}>
                <View style={estilos.descricao}>
                    <Text style={estilos.nomePokemon}>{nomePokemon}</Text>
                    {
                        tiposPokemon.map(tipoPokemon=>
                            <Text key={tipoPokemon} 
                            style={[estilos.tipos, {backgroundColor: qualCorDeFundoTexto(corDeFundo) }]}
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