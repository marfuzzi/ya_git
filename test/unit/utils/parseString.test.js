const expect = require('chai').expect;
const faker = require('faker');
const parseString = require('../../../server/utils/parseString');

describe('parseString', () => {
    it('Должна возвращать массив строк', () => {
        const randomCount = randomInteger(5,10);
        const randomString = faker.random.word();
        let initialString;

        // функция для генерации целого числа в промежутке
        function randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            return rand;
        }

        // генерация initialString
        for (let i = 0; i < randomCount; i++) {
            initialString += randomString + '\n';
        }

        const expectedResult = initialString.split('\n');
        const result = parseString(initialString);

        expect(result).to.deep.equal(expectedResult);

        for (let i = 0; i < randomCount; i++) {
            expect(result[i]).to.be.a('string');
        }
    });
});
