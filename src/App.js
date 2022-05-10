import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>

      <h1>Miniature Adventure</h1>
      <div className='card'>
        <h2>Monster!</h2>
        <div className="card-content-container">
        <div className='card-img'></div>
        <div className="card-challenge-container">
        <div className='card-challenge-box'>Num</div>
        <div className='card-challenge-box'>Num</div>
        <div className='card-challenge-box'>Num</div>
        <div className='card-challenge-box'>Num</div>
        <div className='card-challenge-box'>Num</div>
        <div className='card-challenge-box'>Num</div>
        </div>
        </div>
      </div>

      <div className="dice-container">
        <div className="die-button-container">
        <div className="die"></div>
        <button>Roll!</button>
        </div>
        <div className="die-button-container">
        <div className="die"></div>
        <button>Roll!</button>
        </div>
        <div className="die-button-container">
        <div className="die"></div>
        <button>Roll!</button>
        </div>
        <div className="die-button-container">
        <div className="die"></div>
        <button>Roll!</button>
        </div>
        <div className="die-button-container">
        <div className="die"></div>
        <button>Roll!</button>
        </div>
        <div className="die-button-container">
        <div className="die"></div>
        <button>Roll!</button>
        </div>
        <div className="die-button-container">
        <div className="die"></div>
        <button>Roll!</button>
        </div>
        

      </div>
    </div>
  );
}

export default App;
