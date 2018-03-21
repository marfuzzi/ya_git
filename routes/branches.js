const express = require('express');
const router = express.Router();
const config = require('../config/config');
const cp = require('child_process');
const myRepo = config.pathToFile;
router.get('/:name', function(req, res, next) {
    const name = req.params["name"];
    res.send(name);
    //res.render('branches', {title: 'ddfdf'});
    //var child = cp.spawn('ls', {cwd: `${myRepo}`});

// child.stdout.on('data', function (data) {
//   console.log(data.toString());
// });
});

module.exports = router;
