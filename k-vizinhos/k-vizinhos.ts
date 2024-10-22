// Verificar a similaridade entre pessoas de acordo com o gosto

interface User {
    acao: number
    drama: number
    comedia: number
    terror: number
    romance: number
}

const users: {[key:string]: User} = {
    eduardo: {
        acao: 4,
        drama: 4,
        comedia: 3,
        terror: 1,
        romance: 4
    },
    monica:  {
        acao: 3,
        drama: 5,
        comedia: 4,
        terror: 1,
        romance: 5
    },
    henrique:  {
        acao: 5,
        drama: 1,
        comedia: 2,
        terror: 3,
        romance: 1
    },
    fernanda:  {
        acao: 1,
        drama: 2,
        comedia: 4,
        terror: 4,
        romance: 4.5
    }}

function calculateUserProximity(user1: User, user2: User){
    const values1 = Object.values(user1)
    const values2 = Object.values(user2)

    const valueComparation = values1.map((value, index) =>{
        console.log(value, values2[index])
        return (value - values2[index])**2
    }).reduce((value, acc) => {return value + acc}, 0)
    
    return Math.sqrt(valueComparation)
}

function getNestBraderhood (userName: string){
    const user = users[userName]
    const nestBraderhood: ({value: number} & User)[] = []
    for(let key in users){
        if(!(key === userName)){

        const value = calculateUserProximity(user, users[key])

        if(
            nestBraderhood.length <= 0 ||
            value >= nestBraderhood[nestBraderhood.length - 1].value){
            nestBraderhood.push({value, ...users[key]})
        } else{
            nestBraderhood.forEach((item, index) => {
                if(value < item.value) nestBraderhood.splice(index, 0, {value, ...users[key]})
            });
        }}
    }
    return nestBraderhood
}
console.log(getNestBraderhood('eduardo'))