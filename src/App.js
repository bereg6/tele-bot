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
      <select>
        {/* <label for='GameName'>Game name</label> */}
        <option value='gameName'>Game name</option>
      </select>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
