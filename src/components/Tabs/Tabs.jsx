import cn from 'classnames';
import { activeTabFinder } from '../../middlewares/activeTabFinder';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = activeTabFinder(tabs, activeTabId)

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={cn({
                  'is-active': activeTab.id === tab.id,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() =>
                  tab.id !== activeTabId ? onTabSelected(tab.id) : null
                }
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
