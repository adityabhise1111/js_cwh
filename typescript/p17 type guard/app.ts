//type guards and type script utility types
// using type of and instance of
// partial, required , readonly

// type guard -> type narrowing

function abcd( arg:string | number){
    if(typeof arg === "number"){
        console.log("This is a number: " + arg);
    }
    else if(typeof arg === "string"){
        console.log("This is a string: " + arg);
    }
    else{
        throw new Error("Invalid type");
    }

}

console.log(abcd("aditya"));
console.log(abcd(1000));
//console.log(abcd(true)); // this will throw an error


//typeof instance of 

class tvKaRemote{
    switchoTvff(){
        console.log("TV is switched off");
    }
}
class carKaRemote{
    switchCarOff(){
        console.log("Car is switched off");
    }
}

const remote1 = new tvKaRemote();
const remote2 = new carKaRemote();


function switchoffer(remote :tvKaRemote |carKaRemote){
    if ( remote instanceof tvKaRemote) {
        remote.switchoTvff();
    }
    else if (remote instanceof carKaRemote) {
        remote.switchCarOff();
    }else{
        throw new Error("Invalid remote type");
    }

}

console.log(switchoffer(remote1));
console.log(switchoffer(remote2));
//console.log(switchoffer({})); // this will throw an error
