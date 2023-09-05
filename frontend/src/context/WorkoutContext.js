import { createContext, useReducer } from 'react'

export const WorkoutContext = createContext()

export const workoutReducer  =(state, action) =>{
    switch(action.type){
        case 'SET_WORKOUT':
            return{
                workout: action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workout: [action.payload, ...state.workout]
            } 
        default:
            return state       
    }
}

export const WorkoutContextprovoder = ({ children }) => {
    const [state, dispatch] = useReducer(workoutReducer,{
        workout: null
    })

    dispatch({type: 'SET_WORKOUT',payload:[{},{}]})


    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider>
    )
}