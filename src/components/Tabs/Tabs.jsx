import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTabId);
  const isTabActive = activeTabIndex !== -1;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              className={cn({
                'is-active':
                  (isTabActive && activeTabIndex === index) ||
                  (!isTabActive && index === 0),
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tab.id !== activeTabId && onTabSelected(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
};
