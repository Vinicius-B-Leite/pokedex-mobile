import React from "react";
import { Image, View } from "react-native";
import estilos from "./estilos";

interface Props{
    fotoPokemon: string
}
export default function FotoPokemon({fotoPokemon}: Props){
    return(
        <>
            <Image style={estilos.imagemPokemon} source={{uri: fotoPokemon}}/>
            <Image style={estilos.ImagemFundo} source={require('../../../imgs/pokebal.png')}/>
        </>
    )
}