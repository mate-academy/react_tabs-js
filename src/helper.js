export function findSelectedTabById(currentTabs, searchedTabId) {
  return currentTabs.find(newTab => searchedTabId === newTab.id)
    || currentTabs[0];
}
