import { binaryShort } from "./binarySearch"
import { simpleShort } from "./shorts/simpleShort"

// Binary searching
const testList = [1,3,5,7,9]
console.log("Binary search result:",binaryShort(testList, 5))
console.log("-----------------------------")

// Binary searching
const testList2 = [1,6,2,7,3]
console.log("simple sort result:",simpleShort(testList))
console.log("-----------------------------")