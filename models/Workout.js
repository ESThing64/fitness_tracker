const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({

    exercises: [
        {

        type: {
            type: String,
            trim: true,
            required: "Why didn't you enter the type of exercise?"
    
        },
    
        name: {
            type: String,
            trim: true,
            required: "Why didn't you enter the name of the exercise?"
        },
         
        duration: {
            type: Number,
            required: "Why didn't you enter the name of the exercise?"
        },
    
        
        weight: {
            type: Number,
            required: "Why didn't you enter the name of the exercise?"
        },
    
        
        reps: {
            type: Number,
            required: "Why didn't you enter the name of the exercise?"
        },
    
        
        sets: {
            type: Number,
            required: "Why didn't you enter the name of the exercise?"
        },

        distance: {
            type: Number,
            required: "What about this distance?"
        }

    }

    ],
    

    day:{
        type: Date,
        default: Date.now()
    },

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


