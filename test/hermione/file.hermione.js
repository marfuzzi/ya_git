const assert = require('assert');

describe('Страница с содержимым файла', () => {
    it('Отображение содержимого файла index.js в ветке master', function () {
        const jsContent = 'console.log(`I\'m master branch`);';

        return this.browser
            .url('/')
            .click('a[href*="master/dir"]')
            .click('.table-dir a[href*="dir/6f0bae1d47ea453d8309b1f8e2b62ff5b388db23"]')
            .click('.blob a[href*="file/0f65b2f1e52bc5665d843c6004794ab96a22738d"]')
            .getText('pre')
            .then((title) => {
                assert.equal(title, jsContent);
            });
    });
    it('Отображение содержимого файла index.js в ветке first', function () {
        const jsContent = 'console.log(`I\'m first branch`);';

        return this.browser
            .url('/')
            .click('a[href*="first/dir"]')
            .click('.blob a[href*="file/7e17d966a3d51c152b87c002c6a6e92b2f39c52d"]')
            .getText('pre')
            .then((title) => {
                assert.equal(title, jsContent);
            });
    });
    it('Отображение содержимого файла index.js в ветке second', function () {
        const jsContent = 'console.log(`I\'m second branch `);';

        return this.browser
            .url('/')
            .click('a[href*="second/dir"]')
            .click('.blob a[href*="file/64c5452f46915440acb705e91631d9d91cf48d33"]')
            .getText('pre')
            .then((title) => {
                assert.equal(title, jsContent);
            });
    });
});
