export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (tabs.every(tab => tab.id !== activeTabId)) return onTabSelected('tab-1');

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === activeTabId ? 'is-active' : ''}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => tab.id !== activeTabId && onTabSelected(tab.id)}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
