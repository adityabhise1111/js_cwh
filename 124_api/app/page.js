"use client"
import Image from "next/image";

export default function Home() {

  const handleClick = async () => {
    let data = {
      name:"aditya",
      role:"programmer"
    }
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)

  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="title">
        its next api
      </div>
      <button onClick={handleClick} >click ome</button>
    </div>
  );
}
