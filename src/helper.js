// eslint-disable-next-line arrow-body-style
export const getSelectedTab = (tabs, selectedTabId) => {
  return tabs.find(({ id }) => id === selectedTabId) || tabs[0];
};
