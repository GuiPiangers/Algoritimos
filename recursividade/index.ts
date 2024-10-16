// Soma todos os numeros de uma lista
export function soma(arrNumbers: number[]): number{
    const lastItem = arrNumbers.pop()
    if(!lastItem) return 0
    return  lastItem + soma(arrNumbers)
}

console.log("Soma dos numeros:" , soma([2,5,3,4]))

// Conta o número de items de uma lista
export function length(arrNumbers: any[]): number{
    const lastItem = arrNumbers.pop()
    if(!lastItem) return 0
    return  1 + length(arrNumbers)
}

console.log("Quantidade de elementos na lista" , length([2,3,4]))

// Retorna o valor mais alto de uma lista
export function biggestrValue(arrNumbers: number[]): number | undefined{
    const lastItem = arrNumbers.pop()
    const penultimateIndex = arrNumbers.length -1
    
    if(arrNumbers.length === 1 || !lastItem) return lastItem

    if(lastItem > arrNumbers[penultimateIndex]) {
        arrNumbers.splice(penultimateIndex, 1, lastItem)        
    } 
    return  biggestrValue(arrNumbers)
}

console.log("Maior numero da lista" , biggestrValue([2,3,7,4]))