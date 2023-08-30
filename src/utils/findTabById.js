export function findTabById(tabs, id) {
  return tabs.find(tab => tab.id === id) ?? tabs[0];
}
