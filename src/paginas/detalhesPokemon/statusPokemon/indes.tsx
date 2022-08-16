import React from "react";
import { Text, View } from "react-native";
import { IPokemonComplete } from "../../../interfaces/IPokemonCompleto";
import estilos from "./estilos";

interface Props{
    pokemon: IPokemonComplete | undefined
}
function Status({pokemon}: Props) {
    return (
        <View style={estilos.conteinerStatus}>
            <View style={estilos.status}>
                <Text style={estilos.statusNome}>HP</Text>
                <Text>{pokemon?.hp}</Text>
            </View>
            <View style={estilos.status}>
                <Text style={estilos.statusNome}>Ataque</Text>
                <Text>{pokemon?.ataque}</Text>
            </View>
            <View style={estilos.status}>
                <Text style={estilos.statusNome}>Defesa</Text>
                <Text>{pokemon?.defesa}</Text>
            </View>
            <View style={estilos.status}>
                <Text style={estilos.statusNome}>Ataque especial</Text>
                <Text>{pokemon?.ataque_especial}</Text>
            </View>
            <View style={estilos.status}>
                <Text style={estilos.statusNome}>Defesa especial</Text>
                <Text>{pokemon?.defesa_especial}</Text>
            </View>
            <View style={estilos.status}>
                <Text style={estilos.statusNome}>Velocidade</Text>
                <Text>{pokemon?.velocidade}</Text>
            </View>
            <View style={estilos.status}>
                <Text style={estilos.statusNome}>Habilidades</Text>
                <View>{pokemon?.habilidades?.map(habilidade => <Text key={habilidade}>{habilidade}</Text>)}</View>
            </View>
        </View>
    );
}

export default Status;