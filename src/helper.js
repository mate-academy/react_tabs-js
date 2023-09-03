export const getSelectedTab = (tabs, selectedTabId) => tabs
  .find(({ id }) => id === selectedTabId) || tabs[0];
