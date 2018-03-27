const myRepo = require('../config/config').pathToFile;
const execProcess = require('../utils/execProcess');
const spawnProcess = require('../utils/spawnProcess');

class ChildProcess {

    getBranch() {
        return execProcess('git branch', {cwd: `${myRepo}`});
    }

    getCommit(branch) {
        return execProcess(`git log ${branch} --pretty=format:%h`, {cwd: myRepo});
    }

    showDataCommit(hashes) {
        return Promise.all(hashes.map((hash) => {
            return spawnProcess('git', ['show', '-s', '--format=%h%n%an%n%cd%n%s', `${hash}`], {cwd: myRepo});
        }));
    }

    getDirTree(hash) {
        return spawnProcess('git', ['ls-tree', `${hash}`], {cwd: `${myRepo}`});
    }

    getDataFile(file) {
        return execProcess(`git cat-file -p ${file}`, {cwd: `${myRepo}`});
    }
}

const childProcess = new ChildProcess();

module.exports = childProcess;
