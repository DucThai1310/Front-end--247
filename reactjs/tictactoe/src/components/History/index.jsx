import React from 'react';

function History(props) {
  const { history, moveToHistory } = props;
  return (
    <>
      {history.map((listSquare, index) => (
        <div key={index}>
          <button
            onClick={() => {
              moveToHistory(index);
            }}>
            go to move #{index}
          </button>
        </div>
      ))}
    </>
  );
}

export default History;
