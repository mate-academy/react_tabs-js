import cn from 'classnames';
import { getFindId } from '../../helper';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = getFindId(tabs, selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isSelectedTab = id === selectedTab.id;

            return (
              <li
                key={id}
                className={cn({
                  'is-active': isSelectedTab,
                })}
                data-cy="Tab"
              >
                <a
                  onClick={() => !isSelectedTab && onTabSelected(tab)}
                  href={`#${id}`}
                  data-cy="TabLink"
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
