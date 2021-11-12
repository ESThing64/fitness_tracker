const express = require("express");
const router = require('express').Router();
const { Exercise, Days} = require('../models');
const db = require("../models");
const path = require("path");
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  });

 
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + '../../public/stats.html'));
  });

 
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + '../../public/exercise.html'));
  });

 
router.get("/exercise?", (req, res) => {
    res.sendFile(path.join(__dirname + '../../public/exercise.html'));
  });

 



 




  module.exports = router;
