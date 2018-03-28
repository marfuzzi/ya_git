const assert = require('assert');

describe('Title', () => {
    it('Загрузка главной страницы. Проверка по title.', function () {
        return this.browser
            .url('/')
            .getTitle()
            .then((title) => {
                assert.equal(title, 'Яндекс.Git');
            });
    });
});

describe('Главная страница', () => {
    it('Отображается заголовок таблицы с данными о ветках', function () {
        return this.browser
            .url('/')
            .isExisting('.table__nav')
            .then((e) => {
                assert.equal(e, true);
            });
    });
    it('Отображается список веток', function () {
        return this.browser
            .url('/')
            .isExisting('.branch')
            .then((e) => {
                assert.equal(e, true);
            });
    });
    it('Отображается ссылка выбора файловой структуры для каждой ветки', function () {
        return this.browser
            .url('/')
            .getText('.branch__dir')
            .then((text) => {
                assert.deepEqual(text[0], 'Файлы');
            });
    });
    it('Отображается ссылка выбора коммитов для каждой ветки', function () {
        return this.browser
            .url('/')
            .getText('.branch__commit')
            .then((text) => {
                assert.deepEqual(text[0], 'Коммиты');
            });
    });
    it('По клику на коммит ветки переход на страницу коммитов ветки', function () {
        let branchCommitLink = '';

        let commitLink = this.browser
            .url('/')
            .$('.branch__commit a');

        return commitLink
            .getAttribute('href')
            .then((href)=>{
                branchCommitLink = href;
                return commitLink;
            })
            .click()
            .getUrl()
            .then((url) => {
                assert.equal(url, branchCommitLink);
            });
    });

    it('По клику на дирректорию ветки переход на страницу файлов ветки', function () {
        let branchFileLink = '';

        let dirLink = this.browser
            .url('/')
            .$('.branch__dir a');

        return dirLink
            .getAttribute('href')
            .then((href)=>{
                branchFileLink = href;
                return dirLink;
            })
            .click()
            .getUrl()
            .then((url) => {
                assert.equal(url, branchFileLink);
            });
    });
});
