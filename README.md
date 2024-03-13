# React Tabs (JS)

Implement the `App` and `Tabs` components to render and switch between given `tabs`.

> Here is [the working version](https://mate-academy.github.io/react_tabs)

1. Save the `selectedTab` in the `App` (the first `tab` is selected by default);
1. Implement the `Tabs` component accepting `tabs` via props and displaying then as <ul> with a link per each `tab` and the content of the selected tab.
1. Each `<li>` should have a `data-cy="Tab"`.
1. Each link should have a `data-cy="TabLink"` and a `href` with a `#tab-id` (see the markup).
1. Pass the `selectedTab` as a prop to the `Tabs`, the specified tab should be selected if possible
  (otherwise, the first tab is selected).
1. The `Tabs` should show the content of the selected tab (add an attribute `data-cy="TabContent"` for testing). Content should be rendered inside the `Tabs` component.
1. The selected tab (`li`) should have an `is-active` class.
1. Pass the `onTabSelected` callback to the `Tabs`, it should be called whenever the user selects another tab.
   (Don't call the callback if the tab was not changed)
1. The callback should receive the data of the selected tab (an object from the array)
1. The `App` title (`h1`) should show a text saying `Selected tab is Tab 1` (show the title of the selected tab).
1. When the user selects another tab the `h1` should be updated accordingly.
1. The `Tabs` component should be stateless (don't have an internal state, only props).

## Instructions

- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://vadimdrobyazko.github.io/react_tabs-js/) and add it to the PR description.
  