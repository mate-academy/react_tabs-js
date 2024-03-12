import cn from 'classnames';
import { useState } from 'react';

export const Tabs = ({ tabs, selectedTab, setSelectedTab }) => {
  // const { id, title, content } = tabs;
  const [selectedText, setSelectedText] = useState(tabs[0].content);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title, content } = tab;

            return (
              <li
                className={cn({ 'is-active': selectedTab === title })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    setSelectedTab(title);
                    setSelectedText(content);
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedText}
      </div>
    </div>
  );
};
