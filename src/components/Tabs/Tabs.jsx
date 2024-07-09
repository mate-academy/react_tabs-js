import '@fortawesome/fontawesome-free/css/all.css';
import React, { useState } from 'react';

export const Tabs = ({
  tabs,
  activeTabId,
  onTabSelected,
  onTitle,
  onContent,
}) => {
  const [content, setContent] = useState('Some text 1');

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(element => (
            <li
              className={element.id === activeTabId ? 'is-active' : ''}
              data-cy="Tab"
              key={element.id}
            >
              <a
                href={`#${element.id}`}
                data-cy="TabLink"
                id={element.id}
                onClick={event => {
                  if (event.target.className !== 'is-active') {
                    onTabSelected(event.target.id);
                    onTitle(element.title);
                    setContent(element.content);
                  }
                }}
              >
                {element.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
