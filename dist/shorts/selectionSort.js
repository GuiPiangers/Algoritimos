"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function selectionSort(list) {
    for (let i = 0; i < list.length; i++) {
        let smallest = list[i];
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < smallest) {
                smallest = list[j];
                list[j] = list[i];
            }
        }
        list[i] = smallest;
    }
}
const array = [3, 8, 2, 4, 1, 7, 10, 2, 20, 6, 9, 5];
selectionSort(array);
console.log(array);
//# sourceMappingURL=selectionSort.js.map