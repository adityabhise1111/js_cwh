class music{
    constructor( public name:String ,
          public artist:String,
          public album:String, 
          public year:number, 
          public genre:String) {}
}

class music2{
          public name :String;
          public artist :String;
          public album :String;
          public year :number;
          public genre :String;

    constructor(  name:String ,
          artist:String,
          album:String, 
          year:number, 
          genre:String) {
            this.name = name;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
          }
}


let m1 = new music("Shape of You", "Ed Sheeran", "Divide", 2017, "Pop");
let m2 = new music("Blinding Lights", "The Weeknd", "After Hours", 2020, "Synthwave");

let m3 = new music2("Rolling in the Deep", "Adele", "21", 2011, "Pop");