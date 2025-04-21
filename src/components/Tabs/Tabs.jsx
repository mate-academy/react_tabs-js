export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValidId = tabs.some(tab => tab.id === activeTabId);
  const currentId = isValidId ? activeTabId : tabs[0].id;

  return tabs.map(tab => (
    <li
      className={currentId === tab.id ? 'is-active' : ''}
      data-cy="Tab"
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (tab.id !== currentId) {
            onTabSelected(tab.id);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  ));
};
