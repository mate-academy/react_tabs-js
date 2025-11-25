import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab =
    tabs.find(tab => tab.id === activeTabId) ||
    (tabs.length > 0 ? tabs[0] : null);

  const finalActiveTabId = activeTab ? activeTab.id : null;
  const activeTabContent = activeTab ? activeTab.content : null;

  const handleTabClick = event => {
    event.preventDefault();
    const clickedTabId = event.currentTarget.dataset.tabId;

    if (clickedTabId && clickedTabId !== finalActiveTabId) {
      onTabSelected(clickedTabId);
    }
  };

  return (
    <>
      <ul className="nav-tabs" role="tablist">
        {tabs.map(tab => {
          const isActive = tab.id === finalActiveTabId;
          const listItemClassName = isActive ? 'is-active' : '';

          return (
            <li
              key={tab.id}
              className={listItemClassName}
              data-cy="Tab"
              role="presentation"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                data-tab-id={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={handleTabClick}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="tab-content" data-cy="TabContent">
        {activeTabContent}
      </div>
    </>
  );
};
