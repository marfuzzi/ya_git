const router = require('express').Router();
const controllerBranch = require('../controllers/branch');
const controllerCommit = require('../controllers/commit')
const controllerCatalog = require('../controllers/catalog')

router.get('/', controllerBranch.getBranch);
router.get('/:name/commit', controllerCommit.getCommit);
router.get('/:name/catalog', controllerCatalog.getCatalog);

module.exports = router;
