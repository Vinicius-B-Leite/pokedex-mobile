import React from "react";
import { Image, View } from "react-native";
import estilos from "./estilos";

export default function FotoPokemon(){
    return(
        <>
            <Image style={estilos.imagemPokemon} source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}}/>
            <Image style={estilos.ImagemFundo} source={require('../../../imgs/pokebal.png')}/>
        </>
    )
}