
export const findTabById = (tabs, selectedTabId) => (
  tabs.find(({ id }) => id === selectedTabId)
);
