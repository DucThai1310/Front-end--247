import './style.css';
function Square(props) {
  const { value, onClick, index } = props;
  return (
    <div className='square' onClick={() => onClick && onClick(index)}>
      {value}
    </div>
  );
}

export default Square;
