export const getCurrentTab = (tabs, selectedTabId) => (
  tabs.find(({ id }) => id === selectedTabId) || tabs[0]
);

export const getDefaultTabId = tabs => tabs[0].id;
