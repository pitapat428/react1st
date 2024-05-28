import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const addCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const changeMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <div className={isDark ? 'dark-mode' : 'light-mode'}>
        {isDark ? '다크모드' : '화이트모드'}
      </div>
      <div className="container">
        <button className="change-mode" onClick={changeMode}>
          Change Mode
        </button>
        <div>Count: {count}</div>
        <button className="add" onClick={addCount}>
          +
        </button>
        <button className="minus" onClick={minusCount}>
          -
        </button>
        <button className="reset" onClick={resetCount}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
