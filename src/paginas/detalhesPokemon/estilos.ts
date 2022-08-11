import { StyleSheet } from "react-native";

export default StyleSheet.create({
    conteiner:{
        width: '100%',
        padding: '5%',
        height: '40%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    botaoVoltar:{
        padding: '5%',
        width: '17%',
        zIndex: 3
    },
    imgPokemon:{
        width: '120%',
        height: '120%',
        position: 'absolute',
        top: 0
    },
    detalhes:{
        width: '100%',
        height: '60%',
        padding: '5%'
    },
    conteinerCabecalho:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    nomePokemon:{
        fontSize: 25,
        textTransform: 'uppercase'
    },
    conteinerTipos:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '50%'
    },
    tipo:{
        alignSelf: 'center',
        padding: '5%',
        borderRadius: 30,
        textTransform: 'capitalize',
        color: 'white',
        fontSize: 15
    },
    conteinerStatus:{
        paddingTop: '5%',
        width: '100%',
    },
    status:{
        flexDirection: 'row',
    },
    statusNome:{
        width: '60%',
        color: 'grey',
        padding: '1%'
    }
})