import { StyleSheet } from "react-native";


export default StyleSheet.create({
    card:{
        width: '100%',
        height: '23%',
        paddingHorizontal: '7%',
        borderRadius: 25,
    },
    nomePokemon:{
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 40,
        paddingTop: 10,
        textTransform: 'capitalize'

    },
    conteiner:{
        flexDirection: 'row',
        height: '100%'
    },
    descricao:{
        width: '45%'
    },
    tipos:{
        fontSize: 12,

        padding: '2%',
        borderRadius: 20,
        margin: 2,
        textAlign: 'center',
        width: '70%',
        textTransform: 'capitalize'
    }
})