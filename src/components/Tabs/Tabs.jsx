export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
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
            onTabSelected(tab.id);
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
