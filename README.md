# React Tabs (JS)

Implement the `App` and `Tabs` components to render and switch between given `tabs`.

> Here is [the working version](https://mate-academy.github.io/react_tabs)

1. Save the `selectedTabId` in the `App` (the first `tab` is selected by default);
1. Implement the `Tabs` component accepting `tabs` as a prop and displaying a link per each `tab` and the content of the selected tab.
1. Each link should have a href with a `#tab-id` (see the markup).
1. Pass the `selectedTabId` as a prop to the `Tabs`, the specified tab should be selected if possible
  (otherwise, the first tab is selected).
1. The `Tabs` should show the content of the selected tab (add an attribute `data-cy="tab-content"` for testing).
1. The selected tab (`li`) should have an `is-active` class.
1. Pass the `onTabSelected` callback to the `Tabs`, it should be called whenever the user selects another tab.
   (Don't call the callback if the tab was not changed)
1. The callback should receive the data of the selected tab (an object from the array)
1. The `App` title (`h1`) should show a text saying `Selected tab is Tab 1` (show the title of the selected tab).
1. When the user selects another tab the `h1` should be updated accordingly.
1. The `Tabs` component should be stateless (don't have an internal state, only props).

. Сохраните «selectedTabId» в «Приложении» (первая вкладка выбрана по умолчанию);
1. Реализуйте компонент «Вкладки», принимая «вкладки» в качестве реквизита и отображая ссылку на каждую «вкладку» и содержимое выбранной вкладки.
1. Каждая ссылка должна иметь href с `#tab-id` (см. разметку).
1. Передайте `selectedTabId` в качестве реквизита для `Tabs`, указанная вкладка должна быть выбрана, если это возможно.
   (в противном случае выбирается первая вкладка).
1. На вкладках должно отображаться содержимое выбранной вкладки (для тестирования добавьте атрибут data-cy="tab-content"`).
1. Выбранная вкладка («li») должна иметь класс «is-active».
1. Передайте обратный вызов onTabSelected в Tabs. Он должен вызываться всякий раз, когда пользователь выбирает другую вкладку.
    (Не вызывайте обратный вызов, если вкладка не была изменена)
1. Колбэк должен получить данные выбранной вкладки (объект из массива)
1. В заголовке «Приложение» (h1) должен отображаться текст «Выбранная вкладка — вкладка 1» (показывать заголовок выбранной вкладки).
1. Когда пользователь выбирает другую вкладку, h1 должен соответствующим образом обновиться.
1. Компонент Tabs не должен иметь состояния (не иметь внутреннего состояния, только реквизиты).

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://voronine.github.io/react_tabs-js/) and add it to the PR description.
