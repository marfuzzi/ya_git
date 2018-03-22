const express = require('express');
const router = express.Router();

const config = require('../config/config');
const myRepo = config.pathToFile;

const execProcess = require('./execProcess');
const spawnProcess = require('./spawnProcess');

const streamToArray = require('./streamToArray');

router.get('/:hash', (req, res) => {
    spawnProcess('git', ['ls-tree', `${req.params['hash']}`], {cwd: `${myRepo}`})
    .then((stream) => {
        return streamToArray(stream).filter(e => e !== '').map((str)=> {
            /// ??? почистить деструктуризацией
           const arr = str.split(' ');
           const key = arr[1];
           const path = arr[2].split('\t')[1];
           const hash = arr[2].split('\t')[0]
           const obj = {};

            obj[key]= path;
            obj.hash= hash;
            console.log(obj);
            return obj
        })
    }).then((data)=> {
        res.render('commit', { fileList: data})
    }).catch((err) => {
        // ??? рендер ошибки
    })
});

router.get('/path/:file', (req, res) => {
   console.log(req.params['file']);
   //execProcess(`git cat-file -p ${req.params['file']}`)
  spawnProcess('git', ['cat-file', '-p', ` ${req.params['hash']}`], {cwd: `${myRepo}`})
    .then((stdout) => {
      console.log("NKJHJHK");
      // res.render('index', {branches: getBranches(stdout)})
     }).catch((err) => {
       // ??? рендер ошибки
    })
});
module.exports = router;
