import cn from 'classnames';

import { findSelectedTab } from '../../functions';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = findSelectedTab(tabs, selectedTabId);

  const isSelected = tab => tab === selectedTab;

  const selectTab = (tab) => {
    if (!isSelected(tab)) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': isSelected(tab) })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
