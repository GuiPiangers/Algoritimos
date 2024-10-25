"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function splitList(list: number[]): number[][]{
//     if(list.length > 1){
//         const middleIndex = Math.floor(list.length /2)
//         const leftList = list.slice(0, middleIndex)
//         const rightList = list.slice(middleIndex)
//         return[...splitList(leftList), ...splitList(rightList)]
//     }
//     return [list]
// }
function mergeSort(list, start = 0, end) {
    if (!end)
        end = list.length;
    const middleIndex = Math.floor(((end - start) / 2));
    if (end - start > 1) {
        mergeSort(list, start, middleIndex);
        mergeSort(list, middleIndex, end);
        merge(list, start, middleIndex, end);
    }
}
function findMiddle(list) {
    return Math.floor(list.length / 2);
}
function merge(list, start, middle, end) {
    const leftList = list.slice(0, middle);
    const rightList = list.slice(middle);
    let leftTop = 0;
    let rightTop = 0;
    for (let k = start; k <= end; k++) {
        if (leftList[leftTop] < rightList[rightTop] ||
            rightTop >= rightList.length) {
            list[k] = leftList[leftTop];
            leftTop++;
        }
        else if (rightList[rightTop] < leftList[leftTop] ||
            leftTop >= leftList.length) {
            list[k] = rightList[rightTop];
            rightTop++;
        }
        console.log(list[k], leftList[leftTop], rightList[rightTop]);
    }
}
const array = [3, 8, 2, 4, 1, 7, 10, 2, 20, 6, 9, 5];
mergeSort(array);
console.log(array);
//# sourceMappingURL=mergeSort.js.map