export interface IPokemonInicial{
    nome: string,
    tipo: string[],
    sprite: string,
    cor: string,
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