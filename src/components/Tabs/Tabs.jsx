import React, { useState } from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs }) => {
  const [selectedItem, setSelectedItem] = useState('tab-1');

  return (
    <>
      <h1 className="title">
        {tabs.find(tab => tab.id === selectedItem)
          ? `Selected tab is ${tabs.find(tab => tab.id === selectedItem).title}`
          : ''}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={cn({ 'is-active': tab.id === selectedItem })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    setSelectedItem(tab.id);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === selectedItem)?.content}
        </div>
      </div>
    </>
  );
};
