import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => activeTabId === tab.id) || tabs[0];

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={cn({
            'is-active': tab === activeTab,
          })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              if (tab.id !== activeTabId) {
                onTabSelected(tab.id);
              }
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
