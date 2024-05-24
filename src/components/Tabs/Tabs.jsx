/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let selectedTab = tabs.find(tab => tab.id === activeTabId);

  if (!selectedTab) {
    selectedTab = { ...tabs[0] };
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              key={tab.id}
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
              // eslint-disable-next-line consistent-return
              onClick={() => {
                if (tab.id !== selectedTab.id) {
                  return onTabSelected(tab.id);
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
        {selectedTab.content}
      </div>
    </div>
  );
};
