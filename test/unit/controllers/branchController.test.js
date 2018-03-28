const expect = require('chai').expect;
const stub = require('../stub/childProcessStub');
const branchController = require('../../../server/controllers/branchController');

describe('branchController', () => {
    it('Получение списка веток в виде массива', async () => {
        let currentResult;
        branchController.childProcess = stub;
        const res = {render: (page, response) => {
            currentResult = response;
        }};
        const expectedResult = {branches: [
            'first b0e055a First',
            'master cdd5269 Master',
            'second f5be848 Second']
        };
        await branchController.getBranch({}, res);
        expect(currentResult).to.deep.equal(expectedResult);
    });
});


