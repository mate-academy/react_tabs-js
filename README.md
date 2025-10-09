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


Компонент `App` повинен взаємодіяти з компонентом `Tabs` за допомогою таких властивостей:

- `tabs` - масив об'єктів вкладок, які будуть відображатися як `Tabs`;
- `activeTabId` - `id` вкладки, яка має бути активною;
- `onTabSelected` - зворотний виклик, що виконується з `id` щойно вибраної вкладки, коли користувач натискає на неї.

Компонент `Tabs` повинен бути без стану (не мати внутрішнього стану, лише властивості).

Дотримуйтесь наступних вимог, щоб пройти тести:
1. Відображати вкладки у списку (`<ul>`);

2. Кожен `<li>` повинен мати `data-cy="Tab"`.

3. `<li>` активної вкладки повинен мати клас `is-active`.

4. Якщо `activeTabId` не відповідає жодному об'єкту в масиві `tabs`, перший з них має бути активним.
5. Додайте посилання з `data-cy="TabLink"` та `href` до `#tab-id` всередині кожного `<li>` (див. розмітку).
6. Компонент `Tabs` повинен відображати вміст активної вкладки в елементі з `data-cy="TabContent"`.
7. Викликайте `onTabSelected` лише тоді, коли користувач вибирає неактивну вкладку.
8. Використовуйте заголовок активної вкладки в `<h1>` компонента `App` у такому форматі: `Вибрана вкладка — це Вкладка 1`.
## Instructions

- Install the Prettier Extension and use these [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guidelines](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://ElinaMrachkovska.github.io/react_tabs-js/) and add it to the PR description.



import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTabId, setActiveTabId] = useState('tab-1');

  const onTabSelected = tabId => {
    setActiveTabId(tabId);
  };

  const validActiveTabId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === validActiveTabId)?.title}
      </h1>
      <Tabs
        tabs={tabs}
        activeTabId={validActiveTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
