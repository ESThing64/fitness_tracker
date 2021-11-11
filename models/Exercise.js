

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
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

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
