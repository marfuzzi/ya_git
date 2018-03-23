const config = require('../config/config');
const myRepo = config.pathToFile;

const spawnProcess = require('./spawnProcess');
const strToObj = require('./strToObj');

const getList = (hash) => {
    return spawnProcess('git', ['ls-tree', `${hash}`], {cwd: `${myRepo}`})
    .then((str) => {
        return strToObj(str)
    }).catch((err) => {
        reject(error);
    })
};

module.exports = getList;
