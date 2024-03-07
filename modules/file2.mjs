// to import the export module

/* to import the module using commonjs 
const func = require("./file1")

const result = func.sum(10,20)
console.log(result)

*/

/* for all of the exports to import, we use *
import * as arithmatic from "./file1.mjs" 

const result = arithmatic.sum(10, 20)
console.log(result)
console.log(arithmatic.name) 
*/

// for single export to import, we use {nameoftheexport}
import {sum} from "./file1.mjs"
import {name} from "./file1.mjs"

console.log(sum(10, 20))
console.log(name)