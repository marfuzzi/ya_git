const myRepo = require('../config/config').pathToFile;
const spawnProcess = require('../utils/spawnProcess');

class Dir {
    constructor() {
        this.spawnProcess = spawnProcess;
    }

    parseString(str) {
        return str.toString().split('\n');
    }

    getTypeHashName(data) {
        return this.parseString(data).filter(e => e !== '').map((str)=> {
            const [,type, hashName] = str.split(' ');
            const [hash, name] = hashName.split('\t');
            return {type, hash, name};
        });
    }

    getDirList(hash) {
        return this.spawnProcess('git', ['ls-tree', `${hash}`], {cwd: `${myRepo}`})
            .then((str) => {
                return this.getTypeHashName(str);
            }).catch((err) => {
                reject(error);
            });
    }
}
const dir = new Dir();

module.exports = dir;
