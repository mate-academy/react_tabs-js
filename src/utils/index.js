export function getActiveTab(tabsForFilter, activeTabId) {
  return tabsForFilter.find(({ id }) => id === activeTabId);
}
