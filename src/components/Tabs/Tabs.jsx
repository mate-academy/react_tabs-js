import cn from 'classnames';

import { getActiveTab } from '../../utills/functions';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const activeTab = getActiveTab(activeTabId, tabs);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => {
            const isActive = activeTab.id === id;

            return (
              <li
                className={cn({ 'is-active': isActive })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => !isActive && onTabSelected(id)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
