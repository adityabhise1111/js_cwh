import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <div className="relative z-20 text-white p-8 pb-20 gap-16 sm:p-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Buy Me Chai</h1>
        <p className="text-xl">A crowd funding platform for creators</p>
        <div className="mt-8 text-lg">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"> 
    </div>

    <div className=" text-white container mx-auto">
      <h1 className="text-2xl  font-bold text-center my-4">Your fans can buy you a chai</h1>
      <div className="flex gap-5 justify-around mx-20 my-10 ">
        <div className="item space-y-3 flex flex-col items-center justify-center">
         <img className=" bg-white rounded-full " src="/man.jpg" width={100} alt="" />
         <p className="text-white">Fund Yourself</p>
         <p className="text-white">Fans are available to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
         <img className=" bg-white rounded-full " src="/coin.jpeg" width={100} alt="" />
         <p className="text-white">Fund Yourself</p>
         <p className="text-white">Fans are available to help you</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">

         < img className=" bg-white rounded-full " src="/fund.png" width={100} alt="" />
         <p className="text-white">Fans want to help</p>
         <p className="text-white">Fans are available to help you</p>
        </div>
      </div>
    </div>

    
    <div className="bg-white h-1 opacity-10"> 
    </div>

    <div className=" text-white container mx-auto">
      <h1 className="text-2xl  font-bold text-center my-4">Learn more about our platform</h1>
      <div className="flex gap-5 justify-around mx-20 my-10 ">
        <div className="item space-y-3 flex flex-col items-center justify-center">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=O_zLJkiQBefPMpBY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
         </iframe>
         <p className="text-white">Fund Yourself</p>
         <p className="text-white">Fans are available to help you</p>
        </div>
        
      </div>
    </div>
    
    </>
  );
}
