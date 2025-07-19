import Image from "next/image";

export default function Home() {
  return (
    <div className="relative z-20 text-white p-8 pb-20 gap-16 sm:p-20 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Get Me Chai</h1>
        <p className="text-xl">A crowd funding platform for creators</p>
        <div className="mt-8 text-lg">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
