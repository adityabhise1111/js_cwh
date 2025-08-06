//
function study(
  subject: string,
  hours: number,
  revision: (topic: string, time: number) => void): void {


  console.log(`Studying ${subject} for ${hours} hours`);
  revision(subject, hours);
}

// Initial study session: Math
study("Math", 2, (subject, hours) => {


  console.log(`Revising ${subject} for ${hours} hours`);
});




//optional and default parameters

function person (name :string, age ?: number, human:boolean =true):void{
    console.log(`Name: ${name}`);
    if (age !== undefined) {
        console.log(`Age: ${age}`);
    }
    console.log(`Human: ${human}`);
}

person("Alice", 30); // Name: Alice, Age: 30, Human: true
person("Bob"); // Name: Bob, Human: true