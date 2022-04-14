const express = require('express')
const router = express.Router()
const tutorcontroller = require('../controller/tutors')

router.route('/tutors')
.get(tutorcontroller.index)
.post(tutorcontroller.input)

router.route('/tutors/:id')
.get(tutorcontroller.getTutorById)
.put(tutorcontroller.update)
.delete(tutorcontroller.hapus)


module.exports = router
