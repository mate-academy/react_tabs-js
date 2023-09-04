export function getSelectedTab(tabs, selectedTabId) {
  // return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  return tabs.find(tab => tab.id === selectedTabId) || tabs[0];
}
