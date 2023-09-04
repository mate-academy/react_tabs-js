export function findCurent(tabs, selectedTabId) {
  return tabs.find(({ id }) => id === selectedTabId) || tabs[0];
}
