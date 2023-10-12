import React from 'react';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const findCurrentTab = tabs.find(item => (item.id === selectedTabId))
    || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={`${findCurrentTab.id === tab.id && 'is-active'}`}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findCurrentTab.content}
      </div>
    </div>
  );
};
