import { StyleSheet } from "react-native";

export default StyleSheet.create({
    imagemPokemon:{
        width: '70%',
        height: '103%',
        resizeMode: 'cover',
        position: 'relative',
    },
    ImagemFundo:{
        position: 'absolute',
        left: '50%',
        width: '55%',
        height: '100%',
        tintColor: 'white',
        opacity: 0.6,
        zIndex: -1,
        resizeMode: 'cover'
    }
})