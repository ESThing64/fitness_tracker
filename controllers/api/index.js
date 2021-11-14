const router = require('express').Router();
const db = require('../../models');


router.post("/workouts", ({body}, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
  
router.get("/workouts", ({body}, res) => {
  db.Workout.aggregate([{
    $addFields:{
        totalDuration: { $sum: "$exercises.duration"}
    }
}])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


  
router.put("/workouts/:id", (req, res) => {
  console.log(req.params.id)
  console.log(req.body);
    db.Workout.findOneAndUpdate({_id: req.params.id}, { $push: {exercises: req.body}}, {new: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
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
        // const sevenDays = results.slice(Math.max(arr.length - 5, 1))
      res.json(results);
    })
    .catch(err => {
      res.json(err);
    });
});


  

// *Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.


  module.exports = router;
