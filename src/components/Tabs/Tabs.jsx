export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return tabs.map(tab => (
    <li
      key={tab.id}
      className={tab.id === activeTabId ? 'is-active' : ''}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={event => {
          event.preventDefault();

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
