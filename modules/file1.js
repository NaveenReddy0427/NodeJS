// modules are useful to get the data of one javascript to the another javascript file
// two ways to write modules 1) common-js module 2) ES6 module


// commonjs module
module.exports.sum = (x, y)=>{
    return x+y;
}

function sub(x, y){
    return x-y;
}

// commonjs module
// module.exports = {
//     add: sum,
// }

