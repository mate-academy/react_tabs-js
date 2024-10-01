import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleClick = tab => {
    if (activeTabId.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={cn({ 'is-active': tab.id === activeTab.id })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            onClick={() => handleClick(tab)}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
