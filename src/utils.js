export const findTabById = (tabs, selectedId) => tabs
  .find(tab => tab.id === selectedId) ?? tabs[0];
