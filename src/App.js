import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease, incrementWithValue, incrementAsync, incrementWithValueAsync } from "./redux/counter";

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  return (
    <div className="App">
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      { counter.value }
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(incrementWithValue(30))}>Increase 30</button>
      <button onClick={() => dispatch(incrementAsync())}>Increase + async</button>
      <button onClick={() => dispatch(incrementWithValueAsync(25))}>Increase 25 + async</button>
    </div>
  );
}

export default App;
