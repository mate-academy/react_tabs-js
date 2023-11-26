import cn from 'classnames';
import { useState } from 'react';

export const Tabs = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
  selectTitle,
}) => {
  const [selectContent, setSelectContent] = useState('Some text 1');

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed" data-cy="TabContent">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': selectedTabId === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  setSelectedTabId(tab.id);
                  setSelectContent(tab.content);
                  selectTitle(tab.title);
                }}
              >
                {`${tab.title}`}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectContent}
      </div>
    </div>
  );
};
