import cn from 'classnames';
import { getSelectedTab } from '../../functions/getSelectedTab';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = getSelectedTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isSelected = id === selectedTab.id;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={cn({ 'is-active': isSelected })}
              >
                <a
                  data-cy="TabLink"
                  href={`#${id}`}
                  onClick={() => !isSelected && onTabSelected(tab)}
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
