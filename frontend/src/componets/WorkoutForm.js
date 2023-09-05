import { useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

const WorkoutForm = () => {
    const{ dispatch } = useWorkoutContext()
    const[recipe_name,setRecipe_name] = useState('')
    const[total_time,setTotal_Time] = useState('')
    const[title,setTitle] = useState('')
    const[load,setLoad] = useState('')
    const[reps,setReps] = useState('')
    const[name,setName] = useState('')
    const[error,setError] = useState('null')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {recipe_name,total_time,title,load,reps,name}

        const response = await fetch('/api/workout',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setRecipe_name('')
            setTotal_Time('')
            setTitle('')
            setLoad('')
            setReps('')
            setName('')
            setError(null)
            console.log('new workout added',json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return(
        <form clssName="crate" onSubmit={handleSubmit}>
            <h3>New recipe</h3>
            <h1>Fill out this form to add a new recipe.</h1>

            <label>Recipe Name</label>
            <input 
                type="text"
                onChange={(e) => setRecipe_name(e.target.value)}
                value={recipe_name}
            />
            <label>Total Time</label>
            <input 
                type="number"
                onChange={(e) => setTotal_Time(e.target.value)}
                value={total_time}
            /> 
            <label>Excersize Title</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Load (in kg):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps:</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <label>Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <button>Add recipe</button>
                {error && <div className="error">{error}</div>}
                </form> 
 
    )

}

export default WorkoutForm