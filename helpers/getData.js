const config = require('../config/config');
const myRepo = config.pathToFile;

const spawnProcess = require('./spawnProcess');
const strToObj = require('./strToObj');

const getData = (hash) => {
    return spawnProcess('git', ['cat-file', '-p', `${hash}`], {cwd: `${myRepo}`})
    .then((str) => {
        return strToObj(str)
    }).catch((err) => {
        // ??? рендер ошибки
    })
};

module.exports = getData;
