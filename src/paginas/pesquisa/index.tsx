import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import Header from "../../componentes/header";
import { propsNavigationStack } from "../../rotas/stack/modelos";

type pesquisaProps = NativeStackScreenProps<propsNavigationStack, "Pesquisa">

export default function Pesquisa(props: pesquisaProps){
    return(
        <Header focar={props.route.params.focar}/>
    )
}