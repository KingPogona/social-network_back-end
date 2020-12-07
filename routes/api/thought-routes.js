const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
    .post(addThought)
    .get(getAllThoughts)


// /api/thoughts/<id>
router.route('/:thoughtId')
    .get(getThoughtsById)
    .put(updateThought)


// /api/comments/<userId>/<thoughtId>
router.route('/:thoughtId/user/:userId')
    .delete(removeThought)


// api/thoughts/<thoughtId>
router.route('/:thoughtId/reactions')
    .post(addReaction)

router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)


module.exports = router;