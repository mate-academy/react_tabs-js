/* eslint-disable */
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const handleClick = () => {
                if (activeTab.id !== tab.id) {
                  onTabSelected(tab.id);
                }
              };
              return (
                <li
                  className={cn({ 'is-active': activeTab.id === tab.id})}
                  data-cy="Tab"
                  key={tab.id}
                  onClick={handleClick}
                >
                  <a href={`#${tab.id}`} data-cy="TabLink">
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
          <div className="block" data-cy="TabContent">
          {activeTab.content}
          </div>
      </div>
    </>
  );
};
/* eslint-enable */
