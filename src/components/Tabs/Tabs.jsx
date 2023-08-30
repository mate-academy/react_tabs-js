import cn from 'classnames';
import { getActiveTab } from '../../utils/utils';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const activeTab = getActiveTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isSelectedTabId = tab.id === activeTab.id;
            const handlerSelectedTab = (element) => {
              if (!isSelectedTabId) {
                onTabSelected(element);
              }
            };

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': isSelectedTabId })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handlerSelectedTab(tab)}
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
