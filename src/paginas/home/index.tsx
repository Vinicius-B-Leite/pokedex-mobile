import React, { useEffect, useState } from "react";
import {SafeAreaView, StatusBar, Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native'
import Header from "../../componentes/header";
import estilos from "./estilos";
import { IPokemonInicial } from "../../interfaces/IPokemonIniciais";
import CardPokemon from "../../componentes/cardPokemon";
import { propStack } from "../../rotas/stack/modelos";
import { buscarPokemon } from "../../funcao/buscarPokemon";
import axios from "axios";

interface Tipo{
    type: {
        name: string
        url: string
    }
}

export default function Home(){
    const navigation = useNavigation<propStack>()

    const [pokemonsIniciais, setPokemonsIniciais] = useState<IPokemonInicial[]>([])
    let pokemons = ['bulbasaur', 'charmander', 'squirtle', 'pikachu']
    useEffect(()=>{

        pokemons.forEach(pokemon=> {
                let cor: string 
                axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`).then(res => cor = res.data.color.name )

                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`).then(res =>{
                    let tipos: string[] = res.data.types.map((tipo: Tipo) => tipo.type.name)
                    setPokemonsIniciais(p => [...p, {
                        cor: cor,
                        nome: res.data.name,
                        tipo: tipos,
                        sprite: res.data.sprites.front_default
                    }])
                })
        })
    }, [])

    return(
        <SafeAreaView>
            <StatusBar />
            <Header click={()=>navigation.navigate('Pesquisa', {focar: true})} visivel={false}/>
            <View style={estilos.continer}>
                <Text style={estilos.titulo}>Pokedex</Text>
                <View style={estilos.cardConteiner}>
                    {
                        pokemonsIniciais.map(pokemonInicial=>{
                            return <CardPokemon key={pokemonInicial.nome} 
                                nomePokemon={pokemonInicial.nome} 
                                tiposPokemon={pokemonInicial.tipo}
                                corDeFundo={pokemonInicial.cor}
                                fotoPokemon={pokemonInicial.sprite}
                                click={()=>navigation.navigate('DetalhesPokemon', {nome: pokemonInicial.nome})}/>
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}