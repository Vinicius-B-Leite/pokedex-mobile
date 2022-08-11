import React from "react";
import { Text } from "react-native";
import { propsNavigationStack} from "../../rotas/stack/modelos";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type PropsDetalhesPokemon = NativeStackScreenProps<propsNavigationStack, "DetalhesPokemon">


export default function DetalhesPokemon(prpos: PropsDetalhesPokemon){
    return(
        <Text>{prpos.route.params.nomePokemon}</Text>
    )
}