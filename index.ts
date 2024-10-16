import { binaryShort } from "./binarySearch"
import { quickShort } from "./shorts/quickShort"
import { simpleShort } from "./shorts/simpleShort"

// Binary searching
const testList = [1,3,5,7,9]
console.log("Binary search result:",binaryShort(testList, 5))
console.log("-----------------------------")

// simple short
const testList2 = [4,1,6,2,7,3]
console.log("simple sort result:",simpleShort(testList2))
console.log("-----------------------------")
// quick short"
const testList3 = [1,6,2,7,3, 8]
console.log("quick sort result:",quickShort(testList3))
console.log("-----------------------------")