const myRepo = require('../config/config').pathToFile;
const spawnProcess = require('../utils/spawnProcess');

class CatalogHelper {
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

    getList(hash) {
        return this.spawnProcess('git', ['ls-tree', `${hash}`], {cwd: `${myRepo}`})
            .then((str) => {
                return this.getTypeHashName(str);
            }).catch((err) => {
                reject(error);
            });
    }
}
const catalogHelper = new CatalogHelper();

module.exports = catalogHelper;
