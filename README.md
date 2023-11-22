# PowerPulse FrontEnd.

React Додаток є фінальним студентським проектом та створена в рамках єдиного проекту з
back-end частиною додатку PowerPulse
https://github.com/kostarusin/power-pulse-back-end-node-js - додаток за
допомогою якого користувач може контролювати свою вагу, рівень фізичних
навантажень, кількість вжитих калорій, тощо.

Цей проєкт було створено за допомогою [Create Vite](https://vitejs.dev/). Для
знайомства і налаштування додаткових можливостей
[звернися до документації](https://vitejs.dev/guide/).

Базові технології та/або бібліотеки використані для створення додатку:

- reduxjs/toolkit
- react-redux
- redux-persist
- react-toastify
- react-datepicker
- react-infinite-scroll-component
- react-responsive
- react-router-dom

- axios
- formik
- yup
- lodash
- nanoid
- mui/materia

## Початок роботи

Ці інструкції допоможуть вам налаштувати та запустити проект на вашому
локальному комп'ютері.

1. Переконайся, що на комп'ютері встановлена LTS-версія Node.js.
   [Скачай і встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встановіть базові залежності проекту командою `npm install`.
3. Запустіть режим розробки, виконавши команду `npm run dev`.
4. Перейди в браузері за адресою, що зазначено в терміналі.

### Деплой

Продакшн версія проєкту буде автоматично збиратися і деплоїтися на GitHub Pages,
у гілку `gh-pages`, щоразу, коли оновлюється гілка `main`. Наприклад, після
прямого пушу або прийнятого пул-реквесту. Для цього необхідно у файлі
`vite.config.js` відредагувати поле `base`, замінивши `react_vite` на свою назву
репозиторію `"/your_repo_name"`, і відправити зміни на GitHub.

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) і
виставити роздачу продакшн версії файлів із папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./src/assets/repo-settings.png)

#### Back-end частина

Back-end частиною додатку PowerPulse
https://github.com/kostarusin/power-pulse-back-end-node-js

Документація API: https://power-pulse-fx29.onrender.com/api-docs/

##### Автори:

- Артем Бортяний - Тімлід фронтенд та загального проекту
- Нікіта Рева - Тімлід бекенд частини проекту
- Андрій Постельник - Розробник
- Анна Винниченко - Розробник
- Лілія Святенко - Розробник
- Максим Лагутін - Розробник
- Олена Буцнева - Розробник
- Вікторія Воробйова - Розробник
- Влад Ковалинський - Розробник
- Генадій Бубліков - Розробник
- Ольга Гресько - Розробник
- Костянтин Тарусін - Розробник
