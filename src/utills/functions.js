export function getActiveTabId(id, arr) {
  return arr.find(obj => obj.id === id) || arr[0];
}
