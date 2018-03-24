
const {router} = require('express');
const myRepo = require('../config/config').pathToFile;

const execProcess = require('../helpers/execProcess');
const spawnProcess = require('../helpers/spawnProcess');

const strToArray = require('../helpers/strToArray');

const getCommit = (req, res) => {
    // получаем список хешей
    getHashes(req)
        .then((hashes) => {
            return Promise.all(hashes.map((hash) => {
                return getInfoHashes(hash);
            }));
            // преобразуем информацию по каждому хешу в объект
        }).then((infoHashes)=> {
            return infoHashesToObjects(infoHashes);
        }).then((data)=>{
            res.render('commit', {hashes: data});
        }).catch((err) => {
            res.render('error', {
                message: 'Такого коммита не существует'
            });
        });
};

const getHashes = (req) => {
    return execProcess(`git log ${req.params.name} --pretty=format:%h`, {cwd: `${myRepo}`})
        .then((stdout) => {
            return strToArray(stdout);
        });
};
const getInfoHashes = (hash) => {
    return spawnProcess('git', ['show', '-s', '--format=%h%n%an%n%cd%n%s', `${hash}`], {cwd: `${myRepo}`});
};

const infoHashesToObjects = (infoHashes) => {
    return infoHashes.map((infoString) => {
        let [hash,autor, date, name]= strToArray(infoString);
        date = new Date(date).toDateString();
        return {hash, autor,date, name};
    });
};
module.exports = {getCommit};
