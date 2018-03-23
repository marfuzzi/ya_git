const strToArray = require('./strToArray');

const strToObj = (str) => {
    return strToArray(str).filter(e => e !== '').map((str)=> {
        /// TODO почистить деструктуризацией
        const arr = str.split(' ');
        const key = arr[1];
        const path = arr[2].split('\t')[1];
        const hash = arr[2].split('\t')[0]
        const obj = {};

        obj[key]= path;
        obj.hash= hash;
        return obj
    })
};

module.exports = strToObj;
