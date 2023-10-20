import { useState } from 'react';
import classnames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const [localSelectedTabId, setLocalSelectedTabId] = useState(selectedTabId);
  const findTab = tabs.find(tab => tab.id === localSelectedTabId) || tabs[0];

  const handleTabClick = (tab) => {
    if (tab.id !== localSelectedTabId) {
      setLocalSelectedTabId(tab.id);
      onTabSelected(tab);
    }
  };

  if (!tabs.some(tab => tab.id === localSelectedTabId)) {
    setLocalSelectedTabId(tabs[0].id);
  }

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${findTab.title}`}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classnames(
                  { 'is-active': tab.id === localSelectedTabId },
                )}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {findTab.content}
        </div>
      </div>
    </div>
  );
};
