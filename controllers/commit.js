
const router = require('express').Router();
const myRepo = require('../config/config').pathToFile;

const execProcess = require('../helpers/execProcess');
const spawnProcess = require('../helpers/spawnProcess');
const strToArray = require('../helpers/strToArray');
const getData = require('../helpers/getData');

const getCommit = (req, res) => {
    // получаем список хешей
    getHashes(req)
    .then((hashes) => {
        return Promise.all(hashes.map((hash) => {
           return getInfoHashes(hash);
        }))
        // преобразуем информацию по каждому хешу в объект
    }).then((infoHashes)=> {
        return infoHashesToObjects(infoHashes);
    }).then((data)=>{
        res.render('commit', {hashes: data})
    }).catch((err) => {
        // ??? рендер ошибки
    });
};

const getHashes = (req) => {
    return spawnProcess('git', ['log', `${req.params['name']}`,'--pretty=format:%H'], {cwd: `${myRepo}`})
    .then((stdout) => {return strToArray(stdout)});
};

const getInfoHashes = (hash) => {
    return spawnProcess('git', ['show', '-s', '--format=%h%n%an%n%cd%n%cn', `${hash}`], {cwd: `${myRepo}`})
};

const infoHashesToObjects = (infoHashes) => {
    return infoHashes.map((infoString) => {
        let info = strToArray(infoString);
        return { hash: info[0],
                 autor: info[1],
                 date: new Date(info[2]).toDateString(),
        }
    })
};
module.exports = { getCommit };

