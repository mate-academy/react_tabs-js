/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let currentTabId = activeTabId;

  if (!tabs.find(tab => tab.id === currentTabId)) {
    currentTabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              className={cn({
                'is-active': tab.id === currentTabId,
              })}
              data-cy="Tab"
              onClick={() => {
                if (tab.id !== currentTabId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === currentTabId).content}
      </div>
    </div>
  );
};
