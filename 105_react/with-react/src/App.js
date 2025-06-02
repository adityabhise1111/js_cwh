import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

const [value, set] = useState(0);


  return (
    <div className="App">

      <Navbar logoText="Programming" />

      <div className="value">
        <h1>{value}</h1>
        <button onClick={() => set(value + 1)}>Increment</button>
        <button onClick={ ()=>set(6)} >setvalue</button>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
