export function getTabById(tabs, tabId) {
  return tabs.find(({ id }) => tabId === id) || tabs[0];
}
