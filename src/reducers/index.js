import { FETCH_START,FETCH_SUCCESS, FETCH_ERROR, ADD_SMURF, SET_ERROR } from "../actions";
export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: ''
};

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case(FETCH_START):
        return({
            ...state,
            isFetching: true
        });
        case(FETCH_SUCCESS):
        return({
            ...state,
            smurfs: action.payload,
            isFetching: false,
        });
        case(FETCH_ERROR):
        return({
            ...state,
            isFetching: false,
            error: action.payload
        });
        case(ADD_SMURF):
        return({
            ...state,
            smurfs: [...state.smurfs,
                        action.payload]
        });
        case(SET_ERROR):
        return({
            ...state,
            errorMessage: action.payload
        });
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.