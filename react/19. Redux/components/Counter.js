// import { Component } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { counterAction } from '../store/counter';
// import { INCREMENT } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase(10)); // payload가 redux toolkit에서 가본값으로 사용하는 필드명
  }

  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
  // return (
  //   <main className={classes.counter}>
  //     <h1>Redux Counter</h1>
  //     <div className={classes.value}>{this.props.counter}</div>
  //     <div>
  //       <button onClick={this.incrementHandler.bind(this)}>Increment</button>
  //       <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
  //     </div>
  //     <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
  //   </main>
  // );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
