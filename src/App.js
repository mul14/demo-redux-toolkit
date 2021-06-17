import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/counter";

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  return (
    <div className="App">
      { counter.value }
      <button onClick={() => dispatch(increment())}>Increase</button>
    </div>
  );
}

export default App;
