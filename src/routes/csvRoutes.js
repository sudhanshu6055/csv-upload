const express = require('express');
const router = express.Router();
const multer = require('multer');

const homeController = require('../controller/home_controller');
const csvController = require('../controller/csv_controller');
const upload = multer({ dest: 'uploads/'})


router.get('/', homeController.home);
router.get('/csv/:id', csvController.view);
router.post('/upload', upload.single('csv') ,csvController.upload);

module.exports = router;