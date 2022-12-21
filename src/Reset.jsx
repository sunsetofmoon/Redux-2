import { useDispatch } from "react-redux"

function Reset() {

    const dispatch = useDispatch()

    const reset = () => {
        dispatch({
            type: 'reset'
        })
    }


    return (
        <div>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Reset;