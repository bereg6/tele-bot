import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  
useEffect(() => {
  tg.ready();
}, [])

const onClose = () => {
  tg.close();
}

  return (
    <div className="App"> 
      <label>Game name
        <input type='text' placeholder='Name'></input>
      </label>
      <select>
        {/*  */}
        <option value='gameName'>Game name</option>
      </select>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
