export function binaryShort(list: number[], item: number){
    let less = 0
    let more = list.length - 1

    while (less <= more) {
        const avarange = (less + more) / 2
        const guess = list[avarange]
        
        if(guess === item) return avarange
        
        if(guess > item) more = avarange - 1 
        else less = avarange + 1
    }
    return null
}
