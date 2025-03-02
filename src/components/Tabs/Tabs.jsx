export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return tabs.map(tab => (
    <li
      className={tab.id === activeTabId ? 'is-active' : ''}
      data-cy="Tab"
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={element => {
          element.preventDefault();

          if (tab.id !== activeTabId) {
            onTabSelected(tab.id);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  ));
};
