const express = require('express')
const router = express.Router()
const bmtAccountController = require('../controllers/controlBmtAccount')

router.get('/', bmtAccountController.getAllBmtAccounts)
router.get('/:id', bmtAccountController.getBmtAccountById)
router.post('/', bmtAccountController.postBmtAccount)
router.put('/:id', bmtAccountController.putBmtAccountById)
router.delete('/:id', bmtAccountController.deleteBmtAccountById)

module.exports = router
