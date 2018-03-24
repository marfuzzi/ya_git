const strToArray = require('./strToArray');
const strToObj = (data) => {
    return strToArray(data).filter(e => e !== '').map((str)=> {
        const [,type, hashName] = str.split(' ');
        const [hash, name] = hashName.split('\t');
        return {type, hash, name};
    });
};

module.exports = strToObj;
