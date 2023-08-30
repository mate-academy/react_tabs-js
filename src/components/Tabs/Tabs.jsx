import cn from 'classnames';
import { useState } from 'react';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const [selectedTab, setSelectedTab]
  = useState(tabs.find(tab => tab.id === selectedTabId) ?? tabs[0]);

  function onTabClick(tab) {
    if (tab !== selectedTab) {
      onTabSelected(tab);
      setSelectedTab(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed" data-cy="tab-content">
        <ul>
          {tabs.map((tab) => {
            const isTabSelected = selectedTab === tab;

            const {
              id,
              title,
            } = tab;

            return (
              <li
                className={cn({ 'is-active': isTabSelected })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    onTabClick(tab);
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab?.content}
      </div>
    </div>
  );
};
