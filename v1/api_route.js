var express = require('express');

var router = express.Router();

var getAllDetails = require('./controllers/all');
var new_event = require('./controllers/new_event');
var update_events = require('./controllers/update_events');

router.get('/all', getAllDetails);
router.post('/new_event', new_event);
router.get('/update_events', update_events);

module.exports = router;