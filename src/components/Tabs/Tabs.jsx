import cn from 'classnames';
import { GetActiveTab } from '../../utils/utils';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const activeTab = GetActiveTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isSelectedTabId = tab.id === activeTab.id;

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': isSelectedTabId })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => !isSelectedTabId
                    && onTabSelected(tab)}
                >
                  {tab.title}
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
