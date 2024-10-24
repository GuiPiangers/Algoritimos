"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bubbleSort(list) {
    for (let i = list.length - 2; i > 1; i--) {
        let changes = 0;
        for (let j = 0; j <= i; j++) {
            if (list[j] > list[j + 1]) {
                const helper = list[j];
                list[j] = list[j + 1];
                list[j + 1] = helper;
                changes++;
            }
        }
        if (changes <= 0)
            break;
    }
}
const array = [3, 8, 2, 4, 1, 7, 10, 2, 20, 6, 9, 5];
bubbleSort(array);
console.log(array);
//# sourceMappingURL=bubbleSort.js.map