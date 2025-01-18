const removeFromArray = function(array, ...values) {
    return array.filter(element => !values.includes(element));
};

console.log(removeFromArray([1, 2, 3, 4], 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
