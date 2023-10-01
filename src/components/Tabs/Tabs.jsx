import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const realSelectedTabId = tabs.some(item => item.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((item) => {
              const { id, title } = item;

              return (
                <li
                  key={id}
                  data-cy="Tab"
                  className={cn({
                    'is-active': id === realSelectedTabId,
                  })}
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (id !== selectedTabId) {
                        onTabSelected(item);
                      }
                    }}
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
          tabs.find(item => item.id === realSelectedTabId).content
        }
      </div>
    </div>
  );
};
