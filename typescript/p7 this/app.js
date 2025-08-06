var car = /** @class */ (function () {
    function car() {
        this.brand = "Range Rover";
    }
    car.prototype.changeName = function (newName) {
        this.brand = newName;
    };
    return car;
}());
var bike = /** @class */ (function () {
    function bike(brand) {
        this.brand = brand;
    }
    bike.prototype.changeName = function (newName) {
        this.brand = newName;
    };
    return bike;
}());
var bmw = new car();
bmw.changeName("M-Series");
var splendor = new bike("Honda");
splendor.changeName("Splendor Pro");
splendor.brand = "Splendor Pro Classic";
// This line will cause an error if strict mode is enabled
console.log(bmw.brand); // Output: M-Series
console.log(splendor.brand); // Output: Splendor Pro Classic
