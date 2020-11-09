const express = require('express');
const router = express.Router();
const getPackages = require('../services/packages');

router.get('/', (req, res)=> {
    const error = validateConsumption(req.query.consumption);
    if(error) return res.status(400).send(error.message);
    
    res.send(getPackages(req.query.consumption));
});

const validateConsumption = (consumption) => {
    if(consumption === undefined) return {message: 'Consumption can not be undefined'};
    if(isNaN(consumption)) return {message: 'Please provide a number as consumption'};
    if(consumption < 0) return {message: 'Consumption can not be negative'};

    return false;
}

module.exports = router;
