const parseString = require('../utils/parseString');

class Commit {

    getCommitHashes(data) {
        return parseString(data);
    }

    getCommitDataFromString(infoHashes) {
        return infoHashes.map((infoString) => {
            let [hash,autor, date, name]= parseString(infoString);
            date = new Date(date).toDateString();
            return {hash, autor, date, name};
        });
    }
}

const commit = new Commit();

module.exports = commit;
