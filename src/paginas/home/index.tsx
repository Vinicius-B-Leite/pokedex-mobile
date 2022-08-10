import React, { useEffect, useState } from "react";
import {SafeAreaView, StatusBar, Text, View } from "react-native";
import Header from "../../componentes/header";
import estilos from "./estilos";
import axios from "axios";

export default function Home(){

    const [pokemonsIniciais, setPokemonsIniciais] = useState([])

    useEffect(()=>{
        const url = "https://pokeapi.co/api/v2/pokemon/pikachu"
        axios.get(url)
        .then(resposta=>{
            console.log(resposta.data.types.type.name)
        })
        .catch(erro=>{
            console.log(erro)
        })
    }, [])

    return(
        <SafeAreaView>
            <StatusBar />
            <Header/>
            <View style={estilos.continer}>
                <Text style={estilos.titulo}>Pokedex</Text>
            </View>
        </SafeAreaView>
    )
}