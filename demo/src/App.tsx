import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [battery, setBattery] = useState('');

  useEffect(()=> {
      fetch('http://localhost:4000/stats')
          .then(response => response.json())
          .then(response => {
              //Change battery to your own cell name
              setBattery(response.data[0].battery);
          });
  });

  return (
      <header className="App-header">
          <div>{battery}</div>
      </header>
  );
}

export default App;
