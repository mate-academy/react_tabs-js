export function findSelectedTab(tabse, selectedTabId) {
  return tabse.find(tab => selectedTabId === tab.id) || tabse[0];
}
