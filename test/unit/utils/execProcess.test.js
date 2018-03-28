// const chai = require('chai');
// const {expect, should} = chai;

// const myRepo = require('../../../server/config/config').pathToFile;
// const execProcess = require('../../../server/utils/execProcess');

// describe('execProcess', () => {
//     describe('git log', () => {
//         it('Возвращает промисс', () => {
//             expect(execProcess('git log master --pretty=format:%h', {cwd: `${myRepo}`})).to.be.a('promise');
//         });
//         it('resolve(string)', () => {
//             return execProcess('git log master --pretty=format:%h', {cwd: `${myRepo}`}).then((result) => {
//                 expect(result).to.be.a('string');
//             });
//         });
//     });

//     describe('git branch', () => {
//         it('Возвращает промисс', () => {
//             expect(execProcess('git branch', {cwd: `${myRepo}`})).to.be.a('promise');
//         });
//         it('resolve(string)', () => {
//             return execProcess('git branch', {cwd: `${myRepo}`}).then((result) => {
//                 expect(result).to.be.a('string');
//             });
//         });
//     });
// });
