const assert = require('assert');

describe('Страница с дирректорией', () => {
    beforeEach(function () {
        return this.browser
            .url('/')
            .$('.branch__dir a')
            .click();
    });

    it('Отображается заголовок дирректории', function () {
        return this.browser
            .isExisting('.title-dir')
            .then((e) => {
                assert.equal(e, true);
            });
    });

    it('Отображается содержимое дирректории', function () {
        return this.browser
            .isExisting('.table-dir')
            .then((e) => {
                assert.equal(e, true);
            });
    });

    it('Переход в дирректорию при клике на папку', function () {
        return this.browser
            .click('.tree a')
            .getText('.title-dir')
            .then((title) => {
                assert.equal(title, 'Files');
            });
    });

    it('Переход в содержимое файла при клике на файл', function () {
        return this.browser
            .click('.blob a')
            .isExisting('.dataFile')
            .then((e) => {
                assert.equal(e, true);
            });
    });
});
