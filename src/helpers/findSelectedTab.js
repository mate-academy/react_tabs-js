export const findSelectedTab = (tabs, selectedTabId) => tabs
  .find(tab => tab.id === selectedTabId) || tabs[0];
