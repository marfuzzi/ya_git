const router = require('express').Router();
const controllerCatalog = require('../controllers/catalog');

router.get('/:name', controllerCatalog.getCatalog);

module.exports = router;

