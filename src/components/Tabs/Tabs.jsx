/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const handleClick = () => {
              if (tab.id !== activeTabId) {
                return onTabSelected(tab.id);
              }

              return null;
            };

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': tab.id === activeTabId })}
                data-cy="Tab"
                onClick={handleClick}
                onKeyDown={e => e.key === 'Enter' && handleClick()}
                tabIndex={0}
                role="button"
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
  );
};
