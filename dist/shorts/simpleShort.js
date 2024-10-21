"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleShort = simpleShort;
function getsmallestElement(arr) {
    let smallestElement = arr[0];
    let smallestElementIndex = 0;
    arr.forEach((element, index) => {
        if (element < smallestElement) {
            smallestElement = element;
            smallestElementIndex = index;
        }
    });
    return smallestElementIndex;
}
function simpleShort(arr) {
    let array = [...arr];
    const arrShorted = [];
    arr.forEach(() => {
        let smallestElementIndex = getsmallestElement(array);
        const [lItem] = array.splice(smallestElementIndex, 1);
        arrShorted.push(lItem);
    });
    return arrShorted;
}
//# sourceMappingURL=simpleShort.js.map