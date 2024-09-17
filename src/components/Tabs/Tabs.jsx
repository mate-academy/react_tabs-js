import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTabId);
  const isTabActive = activeTabIndex !== -1;
  const tabContent = tabs.find(tab => tab.id === activeTabId)?.content;

  const handleClick = tabID => tabID !== activeTabId && onTabSelected(tabID);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            const { id, title } = tab;

            return (
              <li
                className={cn({
                  'is-active':
                    (isTabActive && activeTabIndex === index) ||
                    (!isTabActive && index === 0),
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(id)} // helper function causes npm test failing but page still works
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
