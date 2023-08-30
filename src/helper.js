export const getSelectedTab = (tabs, selectedTabId) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return selectedTab;
};
