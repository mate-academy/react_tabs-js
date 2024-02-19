export function getActiveTabTitle(arr, idActive) {
  const activeTab = arr.find(i => i.id === idActive);

  return activeTab.title;
}
