import './App.css';
import { useState, useEffect } from 'react';



function App() {
  
  const [clicks, setClicks] = useState(0);
  
  const [dots, setDots] = useState([]);


  const handleClickLeft = (e) => {
    setClicks((prevClicks) => prevClicks + 1);
 
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY,
    };

    console.log(newDot);
  
    setDots((prevDots) => [...prevDots, newDot]);
  }

  return (
    <div className='App' 
      onClick = {handleClickLeft}
    >
      
    <h2 className='h2-topo'>Você clicou {clicks} vezes na tela</h2>
    {dots.map((item) => (
      <span 
        className='span-dot' 
        style={{left: item.clientX, top: item.clientY}} />
    ))}
    </div>
  );
}

export default App;
