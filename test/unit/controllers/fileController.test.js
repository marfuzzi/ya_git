const expect = require('chai').expect;
const stub = require('../stub/childProcessStub');
const fileController = require('../../../server/controllers/fileController');

class Res {
    render(page, data) {
        this.data = data;
    }
}
const req = {params: {file: 'stub'}};
const res = new Res({});

fileController.childProcess = stub;

describe('fileController', () => {
    it('Получение содержимого файла', async () => {
        await fileController.getDataFile(req, res);
        const currentResult = res.data;
        const expectedResult = {data: 'Hello world!'};
        expect(currentResult).to.deep.equal(expectedResult);
    });
});
