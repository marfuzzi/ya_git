// const expect = require('chai').expect;

// const dir = require('../../../server/helpers/dir');

// describe('Dir', () => {
//     describe('getTypeHashName', () => {
//         it('Возвращает массив объектов с ключами {type, hash, name}', () => {
//             const initialString = '100644 blob 8f35cd\tapp.js\n'+
//                                   '100644 blob 2514af\tpackage.json\n'+
//                                   '040000 tree 9f2946\tserver';
//             const result = dir.getTypeHashName(initialString);
//             const expectedResult = [
//                 {type: 'blob', hash: '8f35cd', name: 'app.js'},
//                 {type: 'blob', hash: '2514af', name: 'package.json'},
//                 {type: 'tree', hash: '9f2946', name: 'server'},
//             ];

//             expect(result).to.deep.equal(expectedResult);
//         });
//     });
// });
