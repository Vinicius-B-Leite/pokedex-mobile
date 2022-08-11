import { StyleSheet } from "react-native";

export default StyleSheet.create({
    imagemPokemon:{
        width: '70%',
        height: '123%',
        resizeMode: 'cover',
        position: 'relative'
    },
    ImagemFundo:{
        position: 'absolute',
        left: '35%',
        width: '50%',
        height: '120%',
        tintColor: 'white',
        opacity: 0.6,
        zIndex: -1
    }
})