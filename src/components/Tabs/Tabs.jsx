import cn from 'classnames';
import 'bulma/css/bulma.css';
import { tabSelectHendler } from '../../utils/tabSelectHendler';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const DEFAULT_TAB_ID = tabs[0].id;
  let selectedTab = tabs.find(tab => tab.id === selectedTabId);

  if (!selectedTab) {
    selectedTab = tabs.find(tab => tab.id === DEFAULT_TAB_ID);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn(
                { 'is-active': tab.id === selectedTab.id },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  tabSelectHendler(tab.id, tabs, onTabSelected, selectedTabId);
                }
                }
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
