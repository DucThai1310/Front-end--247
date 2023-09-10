import { PureComponent, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';

// class CounterRender extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 1,
//     };
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//   componentDidUpdate() {
//     console.log('componentDidUpdate', this.state.count);
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount!');
//   }
//   counter = () => { 
//     this.setState({ ...this.state, count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <div>
//         {this.props.value}
//         <button onClick={this.counter}>{this.state.count}</button>
//       </div>
//     );
//   }
// }
const CounterRender = props => {
  console.log('CounterRender');
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('end');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('componentWillUnmount!');
    };
  }, []);
  return <div>{props.value}</div>;
};
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // console.log(count1);

  // //componentDidMount
  // useEffect(() => {
  //   console.log('count1:(componentDidMount)', count1);
  //   console.log('count2:(componentDidMount)', count2);
  // }, []);

  // //componentDidUpdate
  // useEffect(() => {
  //   console.log('count1:(componentDidUpdate)', count1);
  //   console.log('count2:(componentDidUpdate)', count2);
  // }, [count1]);
  // useEffect( () => {
  //   console.log(count1);
  // } )
  const counter1 = () => {
    setCount1(count1 + 1);
  };
  const counter2 = () => {
    setCount2(count2 + 1);
  };
  return (
    <div className='App'>
      {/* <button onClick={counter1}>count1 + </button>
      <div>count1: {count1}</div>
      <button onClick={counter2}>count2 + </button>
      {count2 < 1 && <CounterRender value={count2} />} */}
      <Board></Board>
    </div>
  );
}

export default App;
