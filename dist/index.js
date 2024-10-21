"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearch_1 = require("./binarySearch");
const quickShort_1 = require("./shorts/quickShort");
const simpleShort_1 = require("./shorts/simpleShort");
// Binary searching
const testList = [1, 3, 5, 7, 9];
console.log("Binary search result:", (0, binarySearch_1.binaryShort)(testList, 5));
console.log("-----------------------------");
// simple short
const testList2 = [4, 1, 6, 2, 7, 3];
console.log("simple sort result:", (0, simpleShort_1.simpleShort)(testList2));
console.log("-----------------------------");
// quick short"
const testList3 = [1, 6, 2, 7, 3, 8];
console.log("quick sort result:", (0, quickShort_1.quickShort)(testList3));
console.log("-----------------------------");
//# sourceMappingURL=index.js.map