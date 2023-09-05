const express = require ('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteworkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//GET all workouts
router.get('/',getWorkouts)

//Get singal workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a workout
router.delete('/:id',deleteworkout) 


//UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports = router