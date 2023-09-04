export function findTab(tabs, tabId) {
  return tabs.find(tab => tab.id === tabId) || tabs[0];
}
