const assert = require('assert');

describe('Страница с коммитами', () => {
    beforeEach(function () {
        return this.browser
            .url('/master/commit');
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
    it('Корректно отображаются файлы в коммите 1036714', function () {
        return this.browser
            .click('.commit__hash a[href*="dir/1036714"]')
            .getText('.table-dir')
            .then((text) => {
                assert.deepEqual(text, ['.DS_Store', 'README.md', 'index.html', 'index.js', 'style.css']);
            });
    });
    it('Корректно отображаются файлы в коммите 2da0b10', function () {
        return this.browser
            .click('.commit__hash a[href*="dir/2da0b10"]')
            .getText('.table-dir')
            .then((text) => {
                assert.deepEqual(text, ['.DS_Store', 'README.md', 'app']);
            });
    });
});
