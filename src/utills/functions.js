export function getActiveTab(id, arr) {
  return arr.find(obj => obj.id === id) || arr[0];
}
