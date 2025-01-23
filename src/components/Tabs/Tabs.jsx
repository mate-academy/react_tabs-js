import React from 'react';
import cn from "classnames";
export const Tabs = ({tabs, activeTabId, onTabSelected}) => {
  let tabsObject = [...tabs];
  // console.log(`#${activeTabId.id}`);
  return (
    <div data-cy="TabsComponent">

      <div className="tabs is-boxed">
        <ul>
          {tabsObject.map(tab => (
            <li
              key={tab.id}
              onClick={() => onTabSelected(tab)}
              className={cn({ 'is-active': tab.id === activeTabId.id })}
              data-cy="Tab"
            >
              <a href={`#${activeTabId.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTabId.content}
      </div>
    </div>
  );
};

