# React Tabs (JS)

Implement the `Tabs` component that renders several tabs and allows the user to switch between them.

> Here is [the working version](https://mate-academy.github.io/react_tabs)

The `App` should communicate with the `Tabs` component using the following props:

- `tabs` - an array of tab objects to be rendered as `Tabs`;
- `activeTabId` - the `id` of the tab that should be active;
- `onTabSelected` - a callback executed with the `id` of a just selected tab when the user clicks on it.

The `Tabs` component should be stateless (does not have an internal state, only props).

Follow the next requirements to pass the tests:
1. Render tabs in a list (`<ul>`);
2. Each `<li>` should have a `data-cy="Tab"`.
3. The `<li>` of an active tab should have the `is-active` class.
4. If `activeTabId` does not match any object in the `tabs` array, the first one should be active.
5. Add a link with `data-cy="TabLink"` and a `href` to `#tab-id` inside every `<li>` (see the markup).
6. The `Tabs` component should render the content of the active tab in the element with `data-cy="TabContent"`.
7. Call `onTabSelected` only when the user selects a non-active tab.
8. Use the title of the active tab in the `<h1>` of the `App` component in the following format: `Selected tab is Tab 1`.

## Instructions

- Install the Prettier Extension and use these [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guidelines](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://Ezero1.github.io/react_tabs-js/) and add it to the PR description.



React Tabs (JS)
Реалізувати компонент Tabs, який відображає кілька вкладок і дозволяє користувачеві перемикатися між ними.

Ось робоча версія

Додаток повинен взаємодіяти з компонентом Tabs, використовуючи наступні пропси:

tabs - масив об'єктів вкладок, які потрібно відобразити як Tabs;
activeTabId - ідентифікатор вкладки, яка має бути активною;
onTabSelected - колбек, який виконується з ідентифікатором щойно вибраної вкладки, коли користувач натискає на неї.
Компонент Tabs повинен бути безстатусним (не мати внутрішнього стану, тільки пропси).

Дотримуйтесь наступних вимог, щоб пройти тести:

Відображати вкладки списком (<ul>);
Кожен <li> повинен мати data-cy="Tab".
<li> активної вкладки повинен мати клас is-active.
Якщо activeTabId не збігається з жодним об'єктом у масиві вкладок, то активною має бути перша.
Додайте посилання з data-cy="TabLink" та href до #tab-id всередині кожного <li> (див. розмітку).
Компонент Tabs повинен відображати вміст активної вкладки в елементі з data-cy="TabContent".
Викликати onTabSelected тільки тоді, коли користувач вибирає неактивну вкладку.
Використовуйте заголовок активної вкладки в <h1> компонента App у наступному форматі: Вибрана вкладка - це Вкладка 1.
Інструкція
Встановіть розширення Prettier і використовуйте ці налаштування VSCode, щоб увімкнути формат при збереженні.
Реалізуйте рішення, дотримуючись інструкцій до завдань React.
Відкрийте ще один термінал і запустіть тести за допомогою npm-тесту, щоб переконатися, що ваше рішення працює коректно.
Замініть <ваш_аккаунт> на ваше ім'я користувача Github в ДЕМО-посиланні і додайте його в PR descr
