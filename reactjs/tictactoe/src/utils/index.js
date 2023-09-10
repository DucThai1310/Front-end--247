export const calculatorWinner = mapSquare => {
  // mapSquare = [' ', ' ', X, O , ' ', ' ', ' ', ' ', ' ']
  let winner = '';
  const lineWinner = [
    [0, 1, 2],
    [2, 4, 6],
    [3, 4, 5],
    [0, 3, 6],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [3, 5, 8],
  ];
  lineWinner.forEach(line => {
    const index1 = line[0];
    const index2 = line[1];
    const index3 = line[2];
    if (
      mapSquare[index1] !=" " &&
      mapSquare[index1] == mapSquare[index2] &&
      mapSquare[index1] == mapSquare[index3]
    ) {
      winner = mapSquare[index1];
    }
  });
  return winner;
};
