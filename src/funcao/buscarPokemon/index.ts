import axios from "axios"
import { IPokemonComplete } from '../../interfaces/IPokemonCompleto'

interface Tipo{
    type: {
        name: string
        url: string
    }
}

interface habilidade{
    ability:{
        name: string
    }
}
export function buscarPokemon(nomePokemon: string, setPoke: React.Dispatch<React.SetStateAction<IPokemonComplete | undefined>>): void{
    let nome = nomePokemon.toLowerCase()
    let corPokemon: string
    const url2 = `https://pokeapi.co/api/v2/pokemon-species/${nome}/`
    axios.get(url2).then(res=> corPokemon = res.data.color.name).catch(erro=> console.log('erro: ' + erro))
    
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}/`
    axios.get(url).then(resposta=>{
            let tipos: string[] = resposta.data.types.map((tipo: Tipo) => tipo.type.name)
            let habilidades = resposta.data.abilities.map((a: habilidade) => a.ability.name)
        setPoke({
                nome: resposta.data.name,
                tipo: tipos,
                sprite: resposta.data.sprites.front_default,
                cor: corPokemon,
                id: resposta.data.id,
                altura: resposta.data.height,
                peso: resposta.data.weight,
                hp: resposta.data.stats[0].base_stat,
                ataque: resposta.data.stats[1].base_stat,
                defesa: resposta.data.stats[2].base_stat,
                ataque_especial: resposta.data.stats[3].base_stat,
                defesa_especial: resposta.data.stats[4].base_stat,
                habilidades: habilidades,
                velocidade: resposta.data.stats[5].base_stat,
        })
    }).catch(erro=> console.log(erro))
}