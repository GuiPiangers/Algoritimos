function insertionSort(list: number[]){
    for(let i = 1; i < list.length; i++){
        let helper = list[i]
        let j = i - 1
        
        while(j >= 0 && list[j] > helper){
            list[j + 1] = list[j]
            j--
        }
        
        list[j+1] = helper
    }
}

const array =[3, 8, 2, 4, 1, 7, 10, 2, 20, 6, 9, 5]

insertionSort(array)
console.log(array)