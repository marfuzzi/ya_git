const assert = require('assert');

describe('Страница с коммитами', () => {
    beforeEach(function () {
        return this.browser
            .url('/')
            .$('.branch__commit a')
            .click();
    });

    it('Отображается заголовок таблицы с данными о коммитах', function () {
        return this.browser
            .isExisting('.table-commit__nav')
            .then((e) => {
                assert.equal(e, true);
            });
    });

    it('Переход в дирректорию при клике на коммит', function () {
        return this.browser
            .click('.commit__hash a')
            .getText('.title-dir')
            .then((title) => {
                assert.equal(title, 'Files');
            });
    });
    // TODO
    // отображение информации по коммитам
});
