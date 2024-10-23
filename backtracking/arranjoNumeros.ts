const solution: number[][] = []

function isSolution(index: number, max: number){
    return index >= max
}

function backtracking(arr: number[], index: number, max: number){
    const candidates = [0, 1]
    if(isSolution(index, max)){
        solution.push(arr.reduce((add, item, i)=>{
            if(item === 0) return add
            return [...add, max - i]
        }, [] as number[]))
        return
    }
    for (let candidate of candidates){
        backtracking([...arr, candidate], index + 1, max)
    }
}

backtracking([] ,0, 4)

console.log(solution)

