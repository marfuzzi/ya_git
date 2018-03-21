const express = require('express');
const router = express.Router();
const config = require('../config/config');
const cp = require('child_process');
const myRepo = config.pathToFile;

router.get('/', function(req, res, next) {
    console.log('sfsdfsd');
    //res.send('234');
    cp.exec(`cd ${myRepo} && git branch`, (err, stdout, stderr) => {
       res.render('index', {branches: getBranches(stdout)});
        if(err) {
            console.log('err: ' + err);
        }
    });
});

const getBranches = (stdout) => {
    return stdout.split('\n').filter(Boolean).map((branch)=>{
        return branch.replace('*', '').trim();
    })
};

module.exports = router;
