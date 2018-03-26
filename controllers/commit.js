
const {router} = require('express');
const myRepo = require('../config/config').pathToFile;

const execProcess = require('../utils/execProcess');
const spawnProcess = require('../utils/spawnProcess');
const commitHelper = require('../helpers/commitHelper');

const getCommit = (req, res) => {
    // получаем список хешей
    commitHelper.getHashes(req)
        .then((hashes) => {
            return Promise.all(hashes.map((hash) => {
                return commitHelper.getInfoHashes(hash);
            }));
            // преобразуем информацию по каждому хешу в объект
        }).then((infoHashes) => {
            return commitHelper.infoHashesToObjects(infoHashes);
        }).then((data) => {
            res.render('commit', {hashes: data});
        }).catch((err) => {
            res.render('error', {
                message: 'Такого коммита не существует'
            });
        });
};

module.exports = {getCommit};
