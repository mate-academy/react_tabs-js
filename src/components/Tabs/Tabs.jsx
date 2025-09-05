import { useState } from 'react';
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const getInitialTabId = () => {
    if (tabs.length === 0) return null;
    if (tabs.some(tab => tab.id === activeTabId)) {
      return activeTabId;
    }

    return tabs[0].id;
  };

  const [selectedTab, setSelectedTab] = useState(getInitialTabId());

  const onTabChange = id => {
    if (selectedTab !== id) {
      setSelectedTab(id);
      onTabSelected(id);
    }
  };

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={cn({ 'is-active': tab.id === selectedTab })}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => onTabChange(tab.id)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(el => el.id === selectedTab)?.content || ''}
        </div>
      </div>
    </>
  );
};
