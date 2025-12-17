import cn from 'classnames';

import { getActiveTab } from '../../utils';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const resolvedActiveTab = getActiveTab(tabs, activeTabId) || tabs[0];
  const resolvedActiveTabId = resolvedActiveTab.id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={cn({ 'is-active': id === resolvedActiveTabId })}
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (id !== resolvedActiveTabId) {
                    onTabSelected(id);
                  }
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {resolvedActiveTab.content}
      </div>
    </div>
  );
};
