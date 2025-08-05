var arr = [1, 2, 3, "harsh", { name: "adiyta" }, { name: 1000 }]; //works but not ideal 
var arr2 = [1, 2, 3]; //now it errors for other data types
//tupple
var arr3 = [10, "ben"];
//enum 
var useRoles;
(function (useRoles) {
    useRoles["Admin"] = "admin";
    useRoles["User"] = " user";
})(useRoles || (useRoles = {}));
