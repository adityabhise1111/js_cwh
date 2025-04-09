import mongoose from "mongoose";

const dummySchema = new mongoose.Schema(
    {
        name: String,
        salary: Number,
        language: String,
        city : String,
        isManager: Boolean
    }
);

export const dummy = mongoose.model('dummy', dummySchema);

export const genData = async ()=>{

    const dummydata =[];

    for (let i =0 ; i<10; i++){
        dummydata.push({
            name: `Employee ${i}`,
            salary : Math.floor(Math.random()*100000),
            language : ["HIndi","gujrati","java","python","kotlin"][Math.floor(Math.random()*4)],
            isManager: Math.random() < 0.3
        });
    }
    await dummy.insertMany(dummydata);

};