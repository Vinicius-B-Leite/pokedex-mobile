import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { propsNavigationStack } from "../../rotas/stack/modelos";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AntDesign } from '@expo/vector-icons';
import estilos from "./estilos";
import { IPokemonComplete } from "../../interfaces/IPokemonCompleto";
import { buscarPokemon } from "../../funcao/buscarPokemon";
import { qualCorDeFundo } from "../../funcao/buscarPokemon/corPokemon/qualCorDeFundo";
import { qualCorDeFundoTexto } from "../../funcao/buscarPokemon/corPokemon/qualCorDeFundoTexto";
import Status from "./statusPokemon/indes";

type PropsDetalhesPokemon = NativeStackScreenProps<propsNavigationStack, "DetalhesPokemon">


export default function DetalhesPokemon(props: PropsDetalhesPokemon) {

    const [pokemon, setPokemon] = useState<IPokemonComplete>()

    useEffect(()=>{
        buscarPokemon(props.route.params.nome, setPokemon)
    },[])

    return (
        <SafeAreaView >
            <View style={[estilos.conteiner, {backgroundColor: qualCorDeFundo(pokemon?.cor)}]}>
                <TouchableOpacity onPress={props.navigation.goBack} style={estilos.botaoVoltar}><AntDesign name="arrowleft" size={24} color="white" /></TouchableOpacity>
                <Image style={estilos.imgPokemon} source={{uri: pokemon?.sprite}}/>
            </View>
            <View style={estilos.detalhes}>
                <View style={estilos.conteinerCabecalho}>
                    <Text style={estilos.nomePokemon}>{pokemon?.nome}</Text>
                    <View style={estilos.conteinerTipos}>
                        {
                            pokemon?.tipo.map(t => <Text style={[estilos.tipo, {backgroundColor: qualCorDeFundoTexto(pokemon?.cor)}]} key={t}>{t}</Text>)
                        }
                    </View>
                </View>
            <Status pokemon={pokemon}/>
            </View>
        </SafeAreaView>
    )
}