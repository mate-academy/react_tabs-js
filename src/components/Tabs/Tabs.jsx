export const Tabs = ({ tabs, activeTabId, onTabSelected }) =>
  tabs.map(tab => (
    <li
      data-cy="Tab"
      key={tab.id}
      className={tab.id === activeTabId ? 'is-active' : ''}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (tab.id !== activeTabId) {
            return onTabSelected(tab.id);
          }

          return null;
        }}
      >
        {tab.title}
      </a>
    </li>
  ));
