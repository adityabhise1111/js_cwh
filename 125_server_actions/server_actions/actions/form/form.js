"use server";
import fs from "fs/promises"
export const submitForm = async (e)=>{
    console.log(e.get("name"), e.get("role"));
    let data = await fs.writeFile("data.txt" ,`name is ${e.get("name")} and role is ${e.get("role")}`)
    console.log(data);

  }