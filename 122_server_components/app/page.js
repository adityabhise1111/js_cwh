//  "use client";
//in nextjs everythins is server components in workin server first 
//so to use react like functionality like use state we need to make it a client compnent
//so we write "use client" at top
//import { useState } from "react";
import Navbar from "@/components/Navbar";
import fs from "fs/promises";






export default async function Home() {
  // const [count, setcount] = useState(0);
   let a = await fs.readFile(".gitignore");
   let b = a.toString();
  console.log(b);
  return (
   <div className="counter">
    <Navbar />
     
     wwe
     <pre>{b}</pre>



   </div>

  );
}
