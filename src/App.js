import { useDispatch, useSelector } from "react-redux";
import Reset from './Reset'

function App() {

  const dispatch = useDispatch()

  const counter = useSelector(state => state)

  const plus = () =>{
    dispatch({
      type: 'plus'
    })
  }

  const minus = () =>{
    dispatch({
      type: 'minus'
    })
  }


  return (
    <div className="App">
      {counter}
      <div>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>
      </div>
      <Reset/>
    </div>
  );
}

export default App;