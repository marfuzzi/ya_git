const expect = require('chai').expect;

const commit = require('../../server/helpers/commit');
const myRepo = require('../../server/config/config').pathToFile;
const branch = 'master';


describe('Commit', () => {
    describe('getCommitDataFromString', () => {
        it('Возвращает массив объектов с ключами {hash, autor, date, name}', () => {
            const initialArray = [
                '452e653\nmarfuzzi\nTue Mar 27 10:50:52 2018 +0300\nизменены названия функций',
                '01c4c16\nmarfuzzi\nTue Mar 27 01:01:10 2018 +0300\nкод разбит на клиент-сервер',
                'b473392\nmarfuzzi\nTue Mar 27 00:29:19 2018 +0300\nСтруктурированы helpers'
            ];
            const result = commit.getCommitDataFromString(initialArray);
            const expectedResult = [
                {hash: '452e653', autor: 'marfuzzi', date: 'Tue Mar 27 2018', name: 'изменены названия функций'},
                {hash: '01c4c16', autor: 'marfuzzi', date: 'Tue Mar 27 2018', name: 'код разбит на клиент-сервер'},
                {hash: 'b473392', autor: 'marfuzzi', date: 'Tue Mar 27 2018', name: 'Структурированы helpers'}
            ];

            expect(result).to.deep.equal(expectedResult);
        });
    });

});
