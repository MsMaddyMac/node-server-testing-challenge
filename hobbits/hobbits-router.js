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

// POST endpoint to add new hobbit to db
router.post('/', (req, res) => {
	Hobbits.insert(req.body)
		.then(hobbit => {
			res.status(201).json(hobbit);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// DELETE endpoint to delete hobbit
router.delete('/:id', (req, res) => {
	const id = req.params.id;

	Hobbits.find(id).then(deletedHobbit => {
		if (deletedHobbit) {
			Hobbits.remove(id, deletedHobbit)
				.then(res => {
					res.status(200);
				})
				.catch(err => {
					res.status(500).json(err);
				});
		}
	});
});

module.exports = router;
