import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease, incrementWithValue } from "./redux/counter";

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  return (
    <div className="App">
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      { counter.value }
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(incrementWithValue(30))}>Increase +30</button>
    </div>
  );
}

export default App;
