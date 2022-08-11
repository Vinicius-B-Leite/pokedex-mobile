import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack ={
    Home: undefined
    DetalhesPokemon: {
        nomePokemon: string
    }
}

export type propStack = NativeStackNavigationProp<propsNavigationStack>