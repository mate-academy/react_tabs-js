export function getSelectedTab(tabs, selectedTabId) {
  return tabs.find(tab => selectedTabId === tab.id) || tabs[0];
}
