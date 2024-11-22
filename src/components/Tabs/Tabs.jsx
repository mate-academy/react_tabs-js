import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected, setActiveTabId }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': activeTabId === tab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {onTabSelected ? onTabSelected.content : 'No content'}
      </div>
    </div>
  );
};
