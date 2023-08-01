import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    const dispatch = useDispatch();
    const c = useSelector(state => state.c);
    const addBtn = () => {
        dispatch({
            type: "increament"
        })
        console.log(c);
    }
    const subBtn = () => {
        dispatch({
            type: "decreament"
        })
    }
    const increase25 = () => {
        console.log('hi')
        dispatch({
            type: "increamentByValue",
            payload: 25,
        })

    }

    return (
        <div>
            <h1>value</h1>
            <button onClick={addBtn}>increament</button>
            <button onClick={subBtn}>decreament</button>
            <button onClick={increase25}>increaseby25</button>
        </div>
    )
}

export default Home