import cn from 'classnames';

import { getCurrentTab, getDefaultTabId } from '../../helper';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const defaultTabId = getDefaultTabId(tabs);

  const currentTab = getCurrentTab(tabs, selectedTabId);

  function handleTabClick(tab) {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  }

  const isActive = id => (
    selectedTabId === currentTab.id
      ? selectedTabId === id
      : id === defaultTabId
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({
                'is-active': isActive(tab.id),
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))

          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
