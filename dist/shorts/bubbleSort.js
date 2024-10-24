"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bubbleSort(list) {
    for (let i = 0; i < list.length - 1; i++) {
        let changes = 0;
        for (let j = 0; j <= list.length - i; j++) {
            if (list[j] > list[j + 1]) {
                const helper = list[j];
                list[j] = list[j + 1];
                list[j + 1] = helper;
                changes++;
            }
        }
        if (changes <= 1)
            break;
    }
}
const array = [3, 8, 2, 4, 1];
bubbleSort(array);
console.log(array);
//# sourceMappingURL=bubbleSort.js.map