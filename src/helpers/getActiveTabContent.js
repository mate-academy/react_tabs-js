export function getActiveTabContent(arr, idActive) {
  const activeTab = arr.find(i => i.id === idActive);

  return activeTab.content;
}
