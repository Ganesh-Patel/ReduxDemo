
import './App.css'
import { useSelector, useDispatch } from "react-redux";

import { increaseCounter, decreaseCounter } from "./Redux/slices/counterslice"

function App() {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter: {counter} </h1>
      <button
        onClick={() =>
          dispatch(
            increaseCounter({
              value: 5,
            })
          )
        }
      >
        Increase
      </button>
      <button
        onClick={() =>
          dispatch(
            decreaseCounter({
              value: 1,
            })
          )
        }
      >
        Decrease
      </button>
    </>
  )
}

export default App
