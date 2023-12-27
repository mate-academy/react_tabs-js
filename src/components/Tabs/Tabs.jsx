import React from 'react';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const foundTab = [...tabs].find(tab => tab.id === selectedTabId);
  const selectedId = foundTab
    ? selectedTabId
    : tabs[0].id;

  const selectedTab = foundTab || tabs[0];

  return (
    <>
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={`${selectedId === tab.id
                  ? 'is-active'
                  : ''
                }`}
                key={tab.id}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    const changeTab = tab.id !== selectedId
                      ? onTabSelected
                      : () => { };

                    changeTab(tab);
                  }}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            ))
            }
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
