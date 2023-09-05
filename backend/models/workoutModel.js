const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    recipe_name:{
        type:String,
        required:true
    },
    total_time:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    reps:{
        type: Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{ timestamps:true})

module.exports = mongoose.model('Workout',workoutSchema)


