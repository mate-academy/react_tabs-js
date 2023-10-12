import cn from 'classnames';
import React from 'react';

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const newTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(props => (
            <li
              className={cn({ 'is-active': props.id === newTab.id })}
              data-cy="Tab"
              key={props.id}
            >
              <a
                href={`#${props.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (props.id !== selectedTabId) {
                    onTabSelected(props);
                  }
                }}
              >
                {props.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {newTab.content}
      </div>
    </div>
  );
};
