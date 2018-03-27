const parseString = require('../utils/parseString');

class Dir {

    getTypeHashName(data) {
        return parseString(data).filter(e => e !== '').map((str)=> {
            const [,type, hashName] = str.split(' ');
            const [hash, name] = hashName.split('\t');
            return {type, hash, name};
        });
    }
}
const dir = new Dir();

module.exports = dir;
