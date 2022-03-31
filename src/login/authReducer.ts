import {Dispatch} from 'redux'
import {authAPI} from "../api/api";

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks

export const loginTC = (data: any) => (dispatch: Dispatch<ActionsType>) => {

    authAPI.getUserETHAdr(data)
        .then( () => {

        })
        .catch(() => {
        })
}



// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>

