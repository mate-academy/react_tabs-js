import cn from 'classnames';
import { findCurent } from './helper';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const checkId = (currentTab, tab) => currentTab.id === tab.id;
  const currentTab = findCurent(tabs, selectedTabId);
  const selectedTab = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ ' is-active': checkId(currentTab, tab) })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                onClick={() => selectedTab(tab)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
