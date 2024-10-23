"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution = [];
function isSolution(index, max) {
    return index >= max;
}
function backtracking(arr, index, max) {
    const candidates = [0, 1];
    if (isSolution(index, max)) {
        solution.push(arr.reduce((add, item, i) => {
            if (item === 0)
                return add;
            return [...add, max - i];
        }, []));
        return;
    }
    for (let candidate of candidates) {
        backtracking([...arr, candidate], index + 1, max);
    }
}
backtracking([], 0, 4);
console.log(solution);
//# sourceMappingURL=arranjoNumeros.js.map