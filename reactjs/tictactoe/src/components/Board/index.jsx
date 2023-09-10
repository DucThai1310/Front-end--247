import React, { useEffect, useState } from 'react';
import Square from '../Square';
import './style.css';
import { calculatorWinner } from '../../utils';
import History from '../History';
function Board(props) {
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState('');
  const [history, setHistory] = useState([Array(9).fill(' ')]);

  useEffect(() => {
    //check again winner last history
    console.log('change history');
    const lastHistory = history[history.length - 1];
    const newWinner = calculatorWinner(lastHistory);
    setWinner(newWinner);
  }, [history]);

  //winner ="" => winner="X"|"O"
  useEffect( () => {  
    if (winner) {
      alert(`Player ${winner} winner!`);
    }
  }, [winner]);

  const onClickSquare = index => {
    if (!winner) {
      const newListSquare = [...history[history.length - 1]];
      newListSquare[index] = xIsNext ? 'X' : 'O';
      setHistory([...history, newListSquare]);
      setXIsNext(!xIsNext);
    }
  };
  const moveToHistory = index => {
    const newHistory = history.slice(0, index + 1);

    setHistory(newHistory);
  };
  return (
    <div className='board'>
      <h2>Tictactoe</h2>
      <div className='board-list'>
        {history[history.length - 1].map((item, index) => {
          return <Square key={index} value={item} index={index} onClick={onClickSquare} />;
        })}
      </div>
      <div className='display'>
        <span>{winner ? 'Winner:' : 'Next Player:'}</span>
        <span>{winner ? winner : xIsNext ? 'X' : 'O'}</span>
      </div>
      <div className='history-list'>
        <History history={history} moveToHistory={moveToHistory} />
      </div>
    </div>
  );
}

export default Board;
