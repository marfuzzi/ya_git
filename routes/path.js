const express = require('express');
const router = express.Router();

const config = require('../config/config');
const myRepo = config.pathToFile;

const execProcess = require('./execProcess');
const spawnProcess = require('./spawnProcess');

router.get('/:file', (req, res) => {
    res.send("IUIUIUI");
   console.log(req.params['file']);
   execProcess(`git cat-file -p 233bc35`)
//   spawnProcess('git', ['cat-file', '-p', ` ${req.params['hash']}`], {cwd: `${myRepo}`})
     .then((stdout) => {
      console.log("NKJHJHK");
//       // res.render('index', {branches: getBranches(stdout)})
//      }).catch((err) => {
//        // ??? рендер ошибки
    })
});
module.exports = router;
