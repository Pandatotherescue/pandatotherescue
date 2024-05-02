import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="container" ></div>
        <h1>Welcome to the Pandaverse</h1>
        <div className="image-frame">
          <img src="pngegg.png"/>
        </div>
    </>
  );
}

export default App;
