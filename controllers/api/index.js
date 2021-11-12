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
    db.Workout.find({})
    .populate("workouts")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

  


  module.exports = router;
