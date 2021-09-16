import {TOGGLE_AUTH} from "./types";

export const authReducer = (state,action) => {
    const {type} = action
    console.log(state)
    switch (type){
        case TOGGLE_AUTH:
            return !state
        default:
            return state
    }
}
