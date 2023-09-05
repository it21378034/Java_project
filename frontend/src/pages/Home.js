import { useEffect } from 'react'
import { useWorkoutContext } from "../hooks/useWorkoutContext"



//components
import WorkoutDetails from '../componets/WorkoutDetails'
import WorkoutForm from '../componets/WorkoutForm'

const Home = () => {
    const {workout, dispatch} = useWorkoutContext()

    useEffect(() => {
        const fetchworkout = async () => {
            const responce = await fetch('/api/workout')
            const json = await responce.json()


            if(responce.ok){
                dispatch({type: 'SET_WORKOUT',payload:json})
            }
        }

        fetchworkout()
    }, [])
    return (
        <div className="home">
            <div className='workout'>
                {workout &&  workout.map((workout)=>(
                    <WorkoutDetails  key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home