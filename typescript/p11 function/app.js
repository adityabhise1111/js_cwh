//
function study(subject, hours, revision) {
    console.log("Studying ".concat(subject, " for ").concat(hours, " hours"));
    revision(subject, hours);
}
// Initial study session: Math
study("Math", 2, function (subject, hours) {
    console.log("Revising ".concat(subject, " for ").concat(hours, " hours"));
});
//optional and default parameters
function person(name, age, human) {
    if (human === void 0) { human = true; }
    console.log("Name: ".concat(name));
    if (age !== undefined) {
        console.log("Age: ".concat(age));
    }
    console.log("Human: ".concat(human));
}
person("Alice", 30); // Name: Alice, Age: 30, Human: true
person("Bob"); // Name: Bob, Human: true
