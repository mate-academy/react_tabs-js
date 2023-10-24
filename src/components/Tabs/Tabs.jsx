export const Tabs = ({ tabs,
  selectedTabId,
  setSelectedTabId,
  onTabSelected }) => {
  const click = (tabId, selectedId, tabsList) => {
    if (tabId !== selectedId) {
      onTabSelected(tabsList.find(tab => tabId === tab.id));
    }
  };

  const getIsActive = (tabsList, tabId, selectedId) => {
    if (tabId === selectedId
        || tabsList.find(tab => tab.id === selectedId) === undefined) {
      return 'is-active';
    }

    return '';
  };

  return (
    <ul>
      {tabs.map((tab, index) => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={getIsActive(tabs, tab.id, selectedTabId)}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => click(tab.id, selectedTabId, tabs)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
