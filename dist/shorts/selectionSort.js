"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function selectionSort(list) {
    for (let i = 0; i < list.length; i++) {
        let smallestPosition = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[smallestPosition])
                smallestPosition = j;
        }
        const helper = list[i];
        list[i] = list[smallestPosition];
        list[smallestPosition] = helper;
    }
}
const array = [3, 8, 2, 4, 1, 7, 10, 2, 20, 6, 9, 5];
selectionSort(array);
console.log(array);
//# sourceMappingURL=selectionSort.js.map