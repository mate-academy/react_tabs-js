import cn from 'classnames';
import { getSelectedTab } from '../../utils/utils';

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
          {tabs.map(({ id, title }, ...tab) => (

            <li
              key={id}
              className={cn({ 'is-active': selectedTab.id === id })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTab.id !== id) {
                    onTabSelected(tab);
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
        {selectedTab.content}
      </div>
    </div>
  );
};
