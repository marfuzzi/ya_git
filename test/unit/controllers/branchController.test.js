const expect = require('chai').expect;
const stub = require('../stub/childProcessStub');
const branchController = require('../../../server/controllers/branchController');

class Res {
    render(page, data) {
        this.data = data;
    }
}

const res = new Res();

branchController.childProcess = stub;

describe('branchController', () => {
    it('Получение списка веток в виде массива', async () => {
        await branchController.getBranch({}, res);
        const currentResult = res.data;
        const expectedResult = {branches: [
            'first b0e055a First',
            'master cdd5269 Master',
            'second f5be848 Second']
        };
        expect(currentResult).to.deep.equal(expectedResult);
    });
});


