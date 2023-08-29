import cn from 'classnames';
import { findTabById } from '../../utils';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => {
          const currentTab = findTabById(tabs, selectedTabId);

          return (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': currentTab.id === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (currentTab.id !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {findTabById(tabs, selectedTabId).content}
    </div>
  </div>
);
