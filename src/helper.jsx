
export const getFindId = (tabs, selectedTabId) => (
  tabs.find(({ id }) => id === selectedTabId)
);
