export function findTabById(tabs, tabId) {
  return tabs.find(tab => tab.id === tabId)
      ?? tabs[0];
}
