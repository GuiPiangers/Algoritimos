function getsmallestElement(arr: number[]){
    let smallestElement = arr[0]
    let smallestElementIndex = 0
    arr.forEach((element, index) => {
        if(element < smallestElement){
            smallestElement = element
            smallestElementIndex = index
        }
    });
    return smallestElementIndex
}

export function simpleShort(arr: number[]): number[]{
    let array = [...arr]
    const arrShorted = [] as number[]

    arr.forEach(() => {
        let smallestElementIndex = getsmallestElement(array)
        const [lItem] = array.splice(smallestElementIndex, 1)
        arrShorted.push(lItem)
    });

    return arrShorted
}

