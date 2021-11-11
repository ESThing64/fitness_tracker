
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const daySchema = new Schema({
    day:{
        type: Number,
    },

    exercises: [
        {
            type:Schema.Types.ObjectId,
            ref: "Exercise"
        }]
})

const Day = mongoose.model("Day", daySchema);

module.exports = Day;