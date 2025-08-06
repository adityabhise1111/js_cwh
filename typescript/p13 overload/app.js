//ts fnc signature
// function abcd (a: string) : string;
// function abcd (a: number) : number;
//fnc
function abcd(a) {
    if (typeof a === "string") {
        return a;
    }
    if (typeof a === "number") {
        return a++;
    }
}
console.log(abcd("aditya"));
console.log(abcd(100));
console.log(abcd(true));
