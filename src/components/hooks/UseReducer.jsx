import React, { useReducer } from "react";
import { initialState } from "../utils/Reducer";

const UseReducer = () => {
  const initialState = {
    Count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state,action){
    switch(action.type){
        case 'Increment':
            return{ 
                // Count:state.Count+1
                ...state, Count:state.Count+1
            }
        case 'Decrement':
            return {
                ...state, Count:state.Count-1
            }
            case 'Reset':
                return{
                    Count:0
                    // initialState

                }
    }
  }

  return (
    <div className="row">
      <div className="col-3 m-2">
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "Increment" })}
        >
          Increment
        </button>
      </div>
      <div className="col-3 m-2 ">
        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "Decrement" })}
        >
          Decrement
        </button>
      </div>
      <div className="col-3 m-2">
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "Reset" })}
        >
          reset
        </button>
      </div>

      <p>Count:{state.Count}</p>
    </div>
  );
};

export default UseReducer;
