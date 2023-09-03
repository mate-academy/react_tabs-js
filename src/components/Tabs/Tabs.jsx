import cn from 'classnames';
import { getSelectedTab } from '../../helpers/tabs.helper';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = getSelectedTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isSelected = selectedTab.id === id;

            return (
              <li
                key={id}
                className={cn(
                  { 'is-active': isSelected },
                )}
                data-cy="Tab"
              >
                <a
                  onClick={() => !isSelected && onTabSelected(tab)}
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
