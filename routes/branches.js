const express = require('express');
const router = express.Router();

const config = require('../config/config');
const myRepo = config.pathToFile;

const execProcess = require('./execProcess');
const spawnProcess = require('./spawnProcess');

router.get('/:name', (req, res) => {
    // получаем список хешей
    getHashes(req)
    .then((stdout) => {
        const hashes = stdout.toString().split('\n');
        // получаем информацию по каждому хешу
        return Promise.all(hashes.map((hash) => {
           return getInfoHash(hash);
        }))
        // преобразуем информацию по каждому хешу в объект
    }).then((hashes)=> {
        return hashes.map((infoString) => {
            let info = infoString.toString().split('\n');
            return { hash: info[0],
                     autor: info[1],
                     date: new Date(info[2]).toDateString(),
            }
        })
    }).then((data)=>{
        res.render('branches', {hashes: data})
    }).catch((err) => {
        // ??? рендер ошибки
    })
});

const getHashes = (req) => {
    return spawnProcess('git', ['log', `${req.params['name']}`,'--pretty=format:%H'], {cwd: `${myRepo}`})
};

const getInfoHash = (hash) => {
    return spawnProcess('git', ['show', '-s', '--format=%H%n%an%n%cd%n%cn', `${hash}`], {cwd: `${myRepo}`})
};
module.exports = router;
