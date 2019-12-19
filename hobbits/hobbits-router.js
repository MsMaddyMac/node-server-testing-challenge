const router = require('express').Router();

const Hobbits = require('./hobbits-model');


// GET endpoint to retrieve all hobbits
router.get('/', (req, res) => {
	Hobbits.find()
		.then(hobbits => {
			res.status(200).json(hobbits);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;