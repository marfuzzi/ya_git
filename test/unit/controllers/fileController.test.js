const expect = require('chai').expect;
const stub = require('../stub/childProcessStub');
const fileController = require('../../../server/controllers/fileController');


describe('fileController', () => {
    it('Получение содержимого файла', async () => {
        let currentResult;
        fileController.childProcess = stub;
        const req = {params: {
            file: 'stub'
        }
        };
        const res = {render: (page, response) => {
            currentResult = response;
        }};
        const expectedResult = {data: 'Hello world!'};
        await fileController.getDataFile(req, res);
        expect(currentResult).to.deep.equal(expectedResult);
    });
});
