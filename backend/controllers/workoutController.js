const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}
 
 
//get a singal workout
const getWorkout = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error:'No such workout'})
    }

    res.status(200).json(workout)
}




//create new workout
const createWorkout = async(req,res) =>{
    const{recipe_name,total_time,title,load,reps,name} = req.body

    //add doc to db
    try{
        const workout = await Workout.create({recipe_name,total_time,title,load,reps,name})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//delete a workout
const deleteworkout = async(req,res)=>{
    const{ id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout =  await Workout.findOneAndDelete({_id:id})

    if (!workout){
        return res.status(400).json({error:'No such workout'})
    }
  
    res.status(200).json(workout)
}



//update a workout
const updateWorkout = async (req,res)=> {

    const{ id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findByIdAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteworkout,
    updateWorkout
}

