//rest  
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function abcd() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
// spread operator
var arr1 = [1, 2, 3];
var arr2 = __spreadArray([], arr1, true);
var arr3 = [arr1];
console.log(arr2); // [1, 2, 3]
console.log(arr3); // [[1, 2, 3]]
