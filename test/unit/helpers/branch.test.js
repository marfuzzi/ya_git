const expect = require('chai').expect;
const branch = require('../../server/helpers/branch');

describe('Branch', () => {
    describe('getListBranch', () => {
        it('Возвращает массив названий веток', () => {
            const initialString = 'firstBranch\n * master\n secondBranch\n';
            const result = branch.getListBranch(initialString);
            const expectedResult = ['firstBranch', 'master', 'secondBranch'];

            expect(result).to.deep.equal(expectedResult);
        });
    });
});

