import React from 'react';

export const Tabs = ({ tabs, value, setValue }) => {
  const activeTab = tabs.find(tab => tab.title === value);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(table => (
            <li
              className={`${value === table.title && 'is-active'}`}
              data-cy="Tab"
            >
              <a
                key={table.id}
                onClick={() => setValue(table.title)
                }
                href={`#${table.id}`}
                data-cy="TabLink"
              >
                {table.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab && activeTab.content}
      </div>
    </div>
  );
};
