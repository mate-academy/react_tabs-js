import React from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, selectTabId, setSelectTabId, activeTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ title, id }) => (
          <li
            key={id}
            className={cn({ 'is-active': id === selectTabId })}
            data-cy="Tab"
          >
            <a
              onClick={() => setSelectTabId(id)}
              href={`#${id}`}
              data-cy="TabLink"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div
      className="block"
      data-cy="TabContent"
    >
      {activeTab.content}
    </div>
  </div>
);
