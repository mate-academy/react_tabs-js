import cn from 'classnames';
import { findTabById } from '../../utils/utils';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = findTabById(tabs, selectedTabId);

  const isSelectedTab = tab => tab.id === selectedTab.id;

  const onTabClicked = (tab) => {
    if (!isSelectedTab(tab)) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({
                'is-active': isSelectedTab(tab),
              }) || null}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => onTabClicked(tab)}
                data-cy="TabLink"
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
