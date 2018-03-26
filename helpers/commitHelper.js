const myRepo = require('../config/config').pathToFile;
const spawnProcess = require('../utils/spawnProcess');
const execProcess = require('../utils/execProcess');

class CommitHelper {
    constructor() {
        this.spawnProcess = spawnProcess;
        this.execProcess = execProcess;
    }

    getHashes(req) {
        return execProcess(`git log ${req.params.name} --pretty=format:%h`, {cwd: `${myRepo}`})
            .then((stdout) => {
                return this.parseString(stdout);
            });
    }

    getInfoHashes(hash) {
        return spawnProcess('git', ['show', '-s', '--format=%h%n%an%n%cd%n%s', `${hash}`], {cwd: `${myRepo}`});
    }

    infoHashesToObjects(infoHashes) {
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

const commitHelper = new CommitHelper();

module.exports = commitHelper;
