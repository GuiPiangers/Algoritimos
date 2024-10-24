function heap(list: number[], length: number,i: number){
    let root = i
    let left = i * 2 + 1
    let right = i * 2 + 2

    if(left < length && list[root] < list[left]){
        root = left
    }
    if(right < length && list[root] < list[right]){
        root = right
    }

    if(root !== i){
        const helper = list[i]
        list[i] = list[root]
        list[root] = helper
        heap(list, length, root)
    }
}

function heapSort(list: number[]){
    let length = list.length

    for(let i = Math.floor(length/2 -1); i >= 0; i-- ){
        heap(list, length, i)
    }
    console.log(array)
    for(let n = length - 1; n > 0; n--){ 
        let helper = list[0]
        list[0] = list[n]
        list[n] = helper
        heap(list, n, 0)
    }
}

const array =[3, 8, 2, 4, 1, 7, 10, 2, 20, 6, 9, 5]
heapSort(array)
console.log(array)