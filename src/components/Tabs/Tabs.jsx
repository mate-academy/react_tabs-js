/* eslint-disable no-unused-expressions */
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValidTabId = tabs.some(tab => tab.id === activeTabId);

  const currentTabId = isValidTabId ? activeTabId : tabs[0]?.id || null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === currentTabId })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={ev => {
                  ev.preventDefault();
                  if (tab.id !== currentTabId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === currentTabId)?.content}
      </div>
    </div>
  );
};
