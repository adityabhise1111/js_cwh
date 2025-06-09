import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

function App() {
  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      <Navbar />
      
      <h1 className="text-3xl font-bold mt-4">Hello Vite + React!</h1>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 my-8">
        <Cards
          title="Super Sports Car"
          disc="Super sports car segment in India to register 30% growth this year."
        />
        <Cards
          title="Super Sports Car"
          disc="Super sports car segment in India to register 30% growth this year."
        />
        <Cards
          title="Super Sports Car"
          disc="Super sports car segment in India to register 30% growth this year."
        />
      </div>

      <h2 className="text-2xl font-semibold">Vite + React + Tailwind CSS</h2>
      <p className="text-gray-600 mt-2">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
