import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={cn({ 'is-active': selectedTab.id === tab.id })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => selectedTab.id !== tab.id && onTabSelected(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </ul>
  );
};
