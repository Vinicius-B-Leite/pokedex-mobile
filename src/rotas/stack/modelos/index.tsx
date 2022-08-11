import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {IPokemonInicial} from '../../../interfaces/IPokemonIniciais'
export type propsNavigationStack ={
    Home: undefined
    DetalhesPokemon: IPokemonInicial,
    Pesquisa: {
        focar?: boolean
    }
}

export type propStack = NativeStackNavigationProp<propsNavigationStack>