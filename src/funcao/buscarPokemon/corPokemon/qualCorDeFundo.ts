export const qualCorDeFundo = (corDeFundo: string | undefined) => {
    if (corDeFundo == "red") return "orangered"
    if (corDeFundo == 'blue') return '#37a5c6'
    if (corDeFundo == "green") return '#14a06f'
    if (corDeFundo == 'yellow') return '#f7a61b'
    if (corDeFundo == 'brown') return '#9f6934'
    if (corDeFundo == 'purple') return '#ca5cdd'
    if (corDeFundo == 'black') return '#3b3c3c'
    if (corDeFundo == 'white') return '#d6d6d4'
    return corDeFundo
}