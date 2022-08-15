import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IPokemonComplete } from "../../../interfaces/IPokemonCompleto";
export type propsNavigationStack ={
    Home: undefined
    DetalhesPokemon: IPokemonComplete,
    Pesquisa: {
        focar?: boolean
    }
}

export type propStack = NativeStackNavigationProp<propsNavigationStack>