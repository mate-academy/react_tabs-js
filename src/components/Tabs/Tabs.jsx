import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTabId = tabs.some(item => item.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  const getContent = () => tabs.find(item => item.id === currentTabId).content;

  const selectTab = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => {
              const { id, title } = tab;

              return (
                <li
                  key={id}
                  data-cy="Tab"
                  className={cn({
                    'is-active': id === currentTabId,
                  })}
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => selectTab(tab)}
                  >
                    {title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          getContent()
        }
      </div>
    </div>
  );
};
