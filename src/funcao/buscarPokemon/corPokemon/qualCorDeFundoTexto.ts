export const qualCorDeFundoTexto = (corDeFundo: string) => {
    if (corDeFundo == "red") return "#ff7f50"
    if (corDeFundo == 'blue') return '#add8e6'
    if (corDeFundo == "green") return '#bdecb6'
    if (corDeFundo == 'yellow') return '#ffc222'
    if (corDeFundo == 'brown') return '#a87747'
    if (corDeFundo == 'purple') return '#d287e0'
    if (corDeFundo == 'black') return '#6b6b6b'
    if (corDeFundo == 'white') return '#edeee9'
    return 'light'+corDeFundo
}

