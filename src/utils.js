export const findTabById = (tabs, tabId) => tabs
  .find(({ id }) => id === tabId) || tabs[0];
