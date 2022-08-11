import React from "react";
import { Image, Text, View } from "react-native";
import estilos from "./estilos";
import FotoPokemon from "./fotoPokemon";


export default function CardPokemon(){
    return(
        <View style={estilos.card}>
            <View style={estilos.conteiner}>
                <View>
                    <Text style={estilos.nomePokemon}>Pikachu</Text>
                    <Text style={estilos.tipos}>Elétrico</Text>
                    <Text style={estilos.tipos}>Elétrico</Text>
                </View>
                <FotoPokemon/>
            </View>
        </View>
    )
}