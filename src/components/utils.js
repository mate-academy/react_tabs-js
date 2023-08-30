export const findTabId = (tabs, selectedTabId) => (
  tabs.find(tab => tab.id === selectedTabId) ?? tabs[0]
);
