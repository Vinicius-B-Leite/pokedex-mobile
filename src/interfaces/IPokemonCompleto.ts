import { IPokemonInicial } from "./IPokemonIniciais"

export interface IPokemonComplete extends IPokemonInicial{
    id: number,
    hp?: number,
    defesa?: number,
    ataque_especial?: number,
    defesa_especial?: number,
    velocidade?: number,
    altura?: number,
    peso?: number,
    habilidades?: string[],
    ataque?: number
}