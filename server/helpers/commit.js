const myRepo = require('../config/config').pathToFile;
const spawnProcess = require('../utils/spawnProcess');
const execProcess = require('../utils/execProcess');

class Commit {
    constructor() {
        this.spawnProcess = spawnProcess;
        this.execProcess = execProcess;
    }

    getCommitHashes(req) {
        return execProcess(`git log ${req.params.name} --pretty=format:%h`, {cwd: `${myRepo}`})
            .then((stdout) => {
                return this.parseString(stdout);
            });
    }

    getCommitData(hash) {
        return spawnProcess('git', ['show', '-s', '--format=%h%n%an%n%cd%n%s', `${hash}`], {cwd: `${myRepo}`});
    }

    getCommitDataFromString(infoHashes) {
        return infoHashes.map((infoString) => {
            let [hash,autor, date, name]= this.parseString(infoString);
            date = new Date(date).toDateString();
            return {hash, autor,date, name};
        });
    }

    parseString(str) {
        return str.toString().split('\n');
    }
}

const commit = new Commit();

module.exports = commit;
