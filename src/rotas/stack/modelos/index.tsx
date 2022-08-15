import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IPokemonComplete } from "../../../interfaces/IPokemonCompleto";

interface nomePokemon{
    nome: string
}

export type propsNavigationStack ={
    Home: undefined
    DetalhesPokemon: nomePokemon
    Pesquisa: {
        focar?: boolean
    }
}

export type propStack = NativeStackNavigationProp<propsNavigationStack>