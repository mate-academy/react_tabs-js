export const getSelectedTab = (tabs, activeTabId, initialTab) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || initialTab;

  return selectedTab;
};
