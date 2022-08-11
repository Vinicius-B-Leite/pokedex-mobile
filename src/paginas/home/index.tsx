import React, { useEffect, useState } from "react";
import {SafeAreaView, StatusBar, Text, View } from "react-native";
import Header from "../../componentes/header";
import estilos from "./estilos";
import axios from "axios";
import { IPokemonInicial } from "../../interfaces/IPokemonIniciais";
import CardPokemon from "../../componentes/cardPokemon";



interface Tipo{
    type: {
        name: string
        url: string
    }
}
export default function Home(){

    const [pokemonsIniciais, setPokemonsIniciais] = useState<IPokemonInicial[]>([])
    useEffect(()=>{

        let pokemons = ['bulbasaur', 'charmander', 'squirtle', 'pikachu']
        pokemons.map(pokemon=>{

            
            let corPokemon: string
            const url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`
            axios.get(url2).then(res=> corPokemon = res.data.color.name).catch(erro=> console.log('erro: ' + erro))
            
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
            axios.get(url)
            .then(resposta=>{
                let tipos: string[] = resposta.data.types.map((tipo: Tipo) => tipo.type.name)
                setPokemonsIniciais(pokemonsAntigos => [...pokemonsAntigos, {
                    nome: resposta.data.name,
                    tipo: tipos,
                    sprite: resposta.data.sprites.front_default,
                    cor: corPokemon,
                    id: resposta.data.id
                }])
            })
            .catch(erro=>{
                console.log('erro: ' + erro)
            })
        })
    }, [])
    return(
        <SafeAreaView>
            <StatusBar />
            <Header/>
            <View style={estilos.continer}>
                <Text style={estilos.titulo}>Pokedex</Text>
                <View style={estilos.cardConteiner}>
                    {
                        pokemonsIniciais.map(pokemonInicial=>{
                            return <CardPokemon key={pokemonInicial.id} 
                                nomePokemon={pokemonInicial.nome} 
                                tiposPokemon={pokemonInicial.tipo}
                                corDeFundo={pokemonInicial.cor}
                                fotoPokemon={pokemonInicial.sprite}/>
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}