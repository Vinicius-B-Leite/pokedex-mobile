import { NativeStackScreenProps } from "@react-navigation/native-stack";
import axios from "axios";
import React, {useState } from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Header from "../../componentes/header";
import { IPokemonInicial } from "../../interfaces/IPokemonIniciais";
import { propsNavigationStack, propStack } from "../../rotas/stack/modelos";
import { useNavigation } from '@react-navigation/native'
import CardPokemon from "../../componentes/cardPokemon";
import estilos from "./estilos";

type pesquisaProps = NativeStackScreenProps<propsNavigationStack, "Pesquisa">



export default function Pesquisa(props: pesquisaProps){

    const [pokemon, setPokemon] = useState<IPokemonInicial>()
    const navigation = useNavigation<propStack>()
    
    return(
        <SafeAreaView style={estilos.conteinre}>
            <StatusBar/>
            <Header focar={props.route.params.focar} 
                visivel={true}
                setPokemon={setPokemon}
            />
            <View style={estilos.conteinerCard}>
            {
                pokemon ? <CardPokemon 
                            click={()=>navigation.navigate("DetalhesPokemon", {...pokemon})}
                            corDeFundo={pokemon.cor}
                            fotoPokemon={pokemon.sprite}
                            nomePokemon={pokemon.nome}
                            tiposPokemon={pokemon.tipo}/> : <Text>Pokemon não encontrado</Text>
            }
            </View>
        </SafeAreaView>
    )
}