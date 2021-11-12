const router = require('express').Router();
const db = require('../../models');


router.post("/workouts", ({body}, res) => {
    db.Exercise.create(body)
    .then(({ _id }) => db.Exercise.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbExercises => {
      res.json(dbExercises);
    })
    .catch(err => {
      res.json(err);
    });
});
  

router.get("/workouts/range", ({body}, res) => {
    db.Workout.aggregate([{
        $addFields:{
            totalDuration: { $sum: "$exercises.duration"}
        }
    }])
    
    .then(results => {
        console.log(results)
      res.json(results);
    })
    .catch(err => {
      res.json(err);
    });
});


  

// *Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.


  module.exports = router;
