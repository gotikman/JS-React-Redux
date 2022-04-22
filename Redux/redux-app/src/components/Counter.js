// import { connect } from "react-redux";
import { inc, dec, rnd } from '../actions';                    // імпортуєм з actions 
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter)    //! отрим. значення зі store-state
    const dispatch = useDispatch();                        //! отрим. dispatch, викор. для відпривки події

    return (
        <div className="jumbotron">
            <h1 >{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

export default Counter;