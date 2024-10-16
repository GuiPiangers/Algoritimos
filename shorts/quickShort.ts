export function quickShort(arrNumbers: number[]): number[] {
    if(arrNumbers.length <=1) return arrNumbers

    // const middleIndex = Math.floor((arrNumbers.length) / 2)
    const middleArr = arrNumbers[0]
    let smallestArr = arrNumbers.filter(number => number < middleArr)
    let biggestArr = arrNumbers.filter(number => number > middleArr)

    return quickShort(smallestArr).concat([middleArr], quickShort(biggestArr))
}