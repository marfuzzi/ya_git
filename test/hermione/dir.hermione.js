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
});

describe('Страница с дирректорией', () => {
    it('Корректно отображаются названия файлов в ветке master', function () {
        return this.browser
            .url('/master/dir')
            .getText('.table-dir')
            .then((text) => {
                assert.deepEqual(text, ['.DS_Store', 'README.md', 'app']);
            });
    });
    it('Корректно отображаются названия файлов в ветке first', function () {
        return this.browser
            .url('/first/dir')
            .getText('.table-dir')
            .then((text) => {
                assert.deepEqual(text, ['.DS_Store', 'README.md', 'index.html', 'index.js', 'style.css']);
            });
    });
    it('Корректно отображаются названия файлов в ветке second', function () {
        return this.browser
            .url('/second/dir')
            .getText('.table-dir')
            .then((text) => {
                assert.deepEqual(text, ['.DS_Store', 'README.md', 'index.html', 'index.js', 'style.css']);
            });
    });
});

describe('Страница с дирректорией', () => {
    beforeEach(function () {
        return this.browser
            .url('/master/dir');
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
