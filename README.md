Веб-интерфейс для локального git репозитория
---------------------

* [Development](https://ya-git-dev.herokuapp.com/)
* [Production](https://ya-git-prod.herokuapp.com/)


##### Содержание
* [Node.js](#node)
* [Инфраструктура](#infrastructure)
* [Тесты](#tests)

<a name="node"><h2>Node.js</h2></a>

Для запуска необходимо указать локальный путь к репозиторию в файле server/config/config.js.

**Production**
```
npm i
npm start
```
**Development**
```
npm i
npm run dev
```
Открываем по адресу http://localhost:3000

**Технологии**
* Node + express
* Docker
* Travis CI
* Heroku
* сборка Gulp
* шаблонизатор Pug
* препроцессор SASS
* autoprefixer
* eslint, csscomb (linter)
* Babel

**Команды**
* npm run lint запускает eslint и csscomb
* npm run test запускает mocha тесты
* npm run hermione запускает hermione тесты

**Описание интерфейса**
Страницы:
* / - отображает таблицу веток репозитория, ссылки на файловую структуру и коммиты ветки.
* /:branch/commit - отображает коммиты в ветке
* /:branch/dir - отображает файловую структуру ветки
* /dir/:hash - отображает дирректорию
* /file/:hash - отображает содержимое файла
На каждой странице реализована возможность выйти на уровень выше.

**Структура проекта**
Проект разбит на client, server.
Server:
* config/ - содержит конфиги( порт, хост, ссылка на репозиторий).
* controllers/ - содержит реализацию(классы) для каждой сущности (ветки, коммиты, дирректория, файл).
* helpers/ - содержит вспомогательные функции для каждой сущности (ветки, коммиты, дирректория, файл).
* routes/ - роутинг.
* utils/ - содержит вспомогательные функции, не относящиеся к конкретной сущности
* view/ - содержит шаблоны.

<a name="infrastructure"><h2>Инфраструктура</h2></a>

**Технологии**
* Node + express
* Docker
* Travis CI
* Heroku
* сборка Gulp
* шаблонизатор Pug
* препроцессор SASS
* autoprefixer
* eslint, csscomb (linter)
* Babel

**Проверка кода**
* В проекте используется линтеры eslint, csscomb.
* npm run lint запускает eslint и csscomb
* npm run test запускает mocha тесты
* npm run hermione запускает hermione тесты

**Сборка**
* Сборка gulp, при сборке в production весь код минифицируется.
* npm run build запускает сборку

**Контейнеризация**
* Настроена сборка Docker-контейнера.
1. В Dockerfile указываем github-репозиторий.
2. ```docker build -t <имя образа> .``` - создаем образ.
3. ```docker run -d -p 3000:3000 <имя образа>``` - запуск образа в контейнере
4. ```docker ps``` - информация о контейнере
На http://localhost:3000 запуститься приложение

**Continuous Integration**
* Heroku
![Pipeline](https://user-images.githubusercontent.com/1997759/38068450-dc1324c4-3319-11e8-8d8e-642f5999856c.png)
* Travis
![Travis](https://user-images.githubusercontent.com/1997759/38068444-d1a29132-3319-11e8-9d23-52d41cb72900.png)
* Создан heroku.yml с указанием Dockerfile
* .travis.yml c генерацией ключа(```travis encrypt $(heroku auth:token) --add deploy.api_key```)
* app.json с указанием дирректории(показываются пулл-реквесты в heroku)
* Развертывание докер-контейнера на heroku
```heroku stack:set container -a ya-git-dev heroku stack:set container -a ya-git-dev```
* Разворачивается 2 стенда:
* [Staging](https://ya-git-dev.herokuapp.com/) и [Prod](https://ya-git-prod.herokuapp.com/) деплоится с помощью tag.

<a name="tests"><h2>Тесты</h2></a>

# Внимание!
* Для запуска тестов необходимо разархивировать тестовый репозиторий, который находится в корне проекта.

**Запуск приложения**
```
git clone https://github.com/marfuzzi/ya_git.git
cd ya_git
npm i
tar -xvf ya_test_git.tar
npm run dev
```
Открываем по адресу http://localhost:3000

**Unit-тесты**
* Запуск ```npm run test```
* Тесты находятся в папке /test/unit/
* Структура этой дирректории аналогична структуре папки server для удобства поиска и использования тестируемого кода.
* Класс childProcess, который использует child-process(git Cli), подменяется стабом /test/unit/stub/childProcessStub.js.
* Тестирование функций-хелперов основано на проверке возвращаемого результата.
* Тестирование контроллеров основано на проверке res.render, предварительно подменяя child-process стабом.

**Интеграционные тесты**
* Запуск:
    1. В отдельной вкладке ```selenium-standalone start```
    2. В отдельной вкладке ```npm run dev```
    3. В отдельной вкладке ```npm run hermione```

* Тесты находятся в папке /test/hermione/
* Структура файлов в дирректории /test/hermione/ соответствует страницам приложения

**Test-report**
* Команда `npm run test:report` формирует отчет покрытия кода тестами
