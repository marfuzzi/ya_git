<!-- /app/config - хранятся конфиги, в зависимости от окружения, конфиги мерджаться или подключается .ENV

/app/routes/ - хранятся роуты приложения

Старовая страница /branch - выполняется редирект к ней с index роутера - показывает список веток
(Browse Files - для просмотра файловой структуры)
(Browse Tree - для просмотра иерархического дерева)

/branch:name показывает детально по ветке комиты

/ls-tree/:branch - файловая структура

/blob вывод файла

Есть роутинг /tree - это потому что, я не поняла сразу задание и думала нужно построить иерархическое дерево, по которому сожно было бы ходить, но потом перечитала и поняла что нужно ходить по ссылкам =(

Есть роутинг /term - Так же изначально думала, что вся логика приложения будет опираться на команды, которые пользователь сам вводит вручную, но опять же нет

Не стала все это удалять, так как это все таки проделанная работа.

/app/controllers/ - логика приложения

/app/templates/ - view приложения

/app/utils/ - вспомогательные функции, которые, как мне кажется, не сильно опираются на приложение

/app/helpers/ - вспомогательные функции, которые сильно связаны с приложением

В папке src - стили, изображения (только фавикон на данный момент) и js файлы -->


#### Веб-интерфейс для локального git репозитория.

Решение домашнего задание по теме "Node.js".

## Запуск

### Production
```
npm i
npm run build
npm run start
```
Открываем по адресу http://localhost:3000

### Development

#### Запуск приложения
```npm run dev```
Приложение запустится по адресу http://localhost:3000

**Технологии**
* npm run lint запускает eslint и csscomb
* npm run test запускает mocha тесты
* npm run hermione запускает hermione тесты


**Библиотеки**
* moment
* lodash

### Описание интерфейса

**Главная страница**
* На главной странице отображены список переговорок, встречи, календарь, текущее время, кнопка создания встречи.
* Календарь динамичен. Синим цветом выделен текущий день. На события других дней можно переключиться с помощью стрелок или выбором даты в календаре. Таким образом будет отображен выбранный день. Линия текущего времени исчезнет.
* При наведении на свободный слот отображается тултип. При нажатии переходим на страницу создания новой встречи.
* При наведении на событие появляется тултип с информацией о встрече. (Tултип выходит за границы поля встреч(пока не исправлено))
* При клике на правую верхнюю кнопку тултипа переходим на страницу редактирования встречи.

**Страница создания встречи**
* Страница создания встречи
* Реализована валидация. Кнопка создания разблокируется при заполнении всех форм.
Поля времени и участников не вводятся, а выбираются из списка. Поле выбора дня и темы вводятся и валидируются.
* Реализован выпадающий календарь на месяц. Можно ввести дату, можно выбрать на календаре.
* При создании встречи осуществлен переход на день ее создания. Пользователь увидит отображение встречи в сетке.
* Реализована функция подбора рекомендуемых переговорок.

**Страница редактирования встречи**
* При удалении текущей переговорки, появляются рекомендованные(по алгоритму) или дополнительная информация.
* Удалить - удаляет встречу, и осуществляет переход на главную страницу.
* Редактировать - редактирует текущую встречу.

**Функция getRecommendation**
* Алгоритм функции с описанием ./utils/getRecommendation.js
Используется:

Sass (scss)
Pug
Gulp
Postcss (autoprefixer)
CssO, UgliFly, ImageMin (minification)
sourcemap
editorconfig, stylelint и eslint
Express
Node.js
Travis CI
Heroku
