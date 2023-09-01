import cn from 'classnames';

import { findSelectedTab } from '../../utils/utils';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = findSelectedTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const {
              id,
              title,
            } = tab;

            const isTabSelected = id === selectedTab.id;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={cn({ 'is-active': isTabSelected })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => !isTabSelected && onTabSelected(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
