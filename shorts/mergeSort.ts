function mergeSort(list: number[]): void {
    if (list.length > 1) {
        sortHelper(list, 0, list.length);
    }
}

function sortHelper(list: number[], start: number, end: number): void {
    if (end - start > 1) {
        const middle = Math.floor((start + end) / 2);
        sortHelper(list, start, middle);
        sortHelper(list, middle, end);
        merge(list, start, middle, end);
    }
}

function merge(list: number[], start: number, middle: number, end: number): void {
    const leftSubarray = list.slice(start, middle);
    const rightSubarray = list.slice(middle, end);

    let leftIndex = 0, rightIndex = 0, mergedIndex = start;

    while (leftIndex < leftSubarray.length && rightIndex < rightSubarray.length) {
        if (leftSubarray[leftIndex] <= rightSubarray[rightIndex]) {
            list[mergedIndex++] = leftSubarray[leftIndex++];
        } else {
            list[mergedIndex++] = rightSubarray[rightIndex++];
        }
    }

    copyRemainingElements(leftSubarray, leftIndex, list, mergedIndex);
    copyRemainingElements(rightSubarray, rightIndex, list, mergedIndex);
}

function copyRemainingElements(subarray: number[], subIndex: number, targetArray: number[], targetIndex: number): void {
    while (subIndex < subarray.length) {
        targetArray[targetIndex++] = subarray[subIndex++];
    }
}

// Exemplo de uso:
const array = [3, 8, 2, 4, 1, 7, 10, 2, 20, 6, 9, 5];
mergeSort(array);
console.log(array);
