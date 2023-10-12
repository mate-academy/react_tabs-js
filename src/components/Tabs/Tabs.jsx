import React from 'react';

const Tabs = ({ tabs, setSelectedTabId, selectedTabId, setCurrentTab }) => {
  const findCurrentTab = tabs.find(item => (item.id === selectedTabId));

  const onTabSelected = (tab) => {
    setSelectedTabId(tab.id);
    setCurrentTab(tab);
  };

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
                onClick={() => onTabSelected(tab)}
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

export default Tabs;
