import React, { useEffect, useState } from "react";
import {SafeAreaView, StatusBar, Text, View} from "react-native";
import { useNavigation } from '@react-navigation/native'
import Header from "../../componentes/header";
import estilos from "./estilos";
import axios from "axios";
import { IPokemonInicial } from "../../interfaces/IPokemonIniciais";
import CardPokemon from "../../componentes/cardPokemon";
import { propStack } from "../../rotas/stack/modelos";




interface Tipo{
    type: {
        name: string
        url: string
    }
}

interface habilidade{
    ability:{
        name: string
    }
}


export default function Home(){
    const navigation = useNavigation<propStack>()

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
                let habilidades = resposta.data.abilities
                habilidades = habilidades.map((a: habilidade) => a.ability.name)
                setPokemonsIniciais(pokemonsAntigos => [...pokemonsAntigos, {
                    nome: resposta.data.name,
                    tipo: tipos,
                    sprite: resposta.data.sprites.front_default,
                    cor: corPokemon,
                    id: resposta.data.id,
                    altura: resposta.data.height,
                    peso: resposta.data.weight,
                    hp: resposta.data.stats[0].base_stat,
                    ataque: resposta.data.stats[1].base_stat,
                    defesa: resposta.data.stats[2].base_stat,
                    ataque_especial: resposta.data.stats[3].base_stat,
                    defesa_especial: resposta.data.stats[4].base_stat,
                    habilidades: habilidades,
                    velocidade: resposta.data.stats[5].base_stat,
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
            <Header click={()=>navigation.navigate('Pesquisa', {focar: true})}/>
            <View style={estilos.continer}>
                <Text style={estilos.titulo}>Pokedex</Text>
                <View style={estilos.cardConteiner}>
                    {
                        pokemonsIniciais.map(pokemonInicial=>{
                            return <CardPokemon key={pokemonInicial.id} 
                                nomePokemon={pokemonInicial.nome} 
                                tiposPokemon={pokemonInicial.tipo}
                                corDeFundo={pokemonInicial.cor}
                                fotoPokemon={pokemonInicial.sprite}
                                click={()=>navigation.navigate('DetalhesPokemon', {...pokemonInicial})}/>
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}