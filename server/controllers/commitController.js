
const {router} = require('express');
const myRepo = require('../config/config').pathToFile;

const execProcess = require('../utils/execProcess');
const spawnProcess = require('../utils/spawnProcess');
const commit = require('../helpers/commit');

const getCommit = (req, res) => {
    // получаем список хешей
    commit.getCommitHashes(req)
        .then((hashes) => {
            return Promise.all(hashes.map((hash) => {
                return commit.getCommitData(hash);
            }));
            // преобразуем информацию по каждому хешу в объект
        }).then((infoHashes) => {
            return commit.getCommitDataFromString(infoHashes);
        }).then((data) => {
            res.render('commit', {hashes: data});
        }).catch((err) => {
            res.render('error', {
                message: 'Такого коммита не существует'
            });
        });
};

module.exports = {getCommit};
