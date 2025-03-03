export const Tabs = ({ tabs, activeTabId, setActiveTabId }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={activeTabId === tab.id ? 'is-active' : ''}
        data-cy="Tab"
      >
        <a
          href={`#tab-${tab.id}`}
          data-cy="TabLink"
          onClick={e => {
            e.preventDefault();
            setActiveTabId(tab.id);
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
