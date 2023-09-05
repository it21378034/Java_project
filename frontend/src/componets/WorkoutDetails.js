import { Action } from "@remix-run/router"

const WorkoutDetails = ({ workout }) => {


    const handleClick = async() => {
        const response = await fetch('/api/workout/' + workout._id,{
        method: 'DELETE'

    })
    const action = await response.json()

    if(response.ok){
    
       
    }
}

    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Recipe Name</strong>{workout.recipe_name}</p>
            <p><strong>Total Time</strong>{workout.recipe_name}</p>
            <p><strong>Description</strong>{workout.recipe_name}</p>
            <p><strong>Load (kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p><strong>Name</strong>{workout.name}</p>
            <p>{workout.createAt}</p>
            <span onClick={handleClick}>delete</span>


        </div>
    )
}

export default WorkoutDetails