const express = require("express");
const router = require('express').Router();
const { Exercise, Days} = require('../models');
const db = require("../models");



router.get("/", (req, res) => {
    res.render(__dirname + '/public/index.html');
  });

 
router.get("/stats", (req, res) => {
    res.render(__dirname + '/public/stats.html');
  });

 
router.get("/exercise", (req, res) => {
    res.render(__dirname + '/public/exercise.html');
  });

 
router.get("/exercise?", (req, res) => {
    res.render(__dirname + '/public/index.html');
  });

 



 




  module.exports = router;
