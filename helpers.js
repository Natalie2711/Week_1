// Option 1
// function sum(a,b){
//     return a + b;
// }

// Option 2: const sum = (a,b) =>  a + b;

// Option 3: const sum = a => a + b;

// Option 4:
const sum = (a,b) => {
    return a + b;
};

// Export option 1
module.exports = {
    sum
};

// Export option 2:
exports.sum = (a,b) => a + b; 
exports.add = (a,b) => a + b;
// // process
// console.log("PROCESS: ", process)