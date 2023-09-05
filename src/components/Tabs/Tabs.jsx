import classnames from 'classnames';
import { getSelectedTab } from '../../helpers';

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const currentTab = getSelectedTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isSelectedTab = id === currentTab.id;

            return (
              <li
                key={id}
                className={classnames({
                  'is-active': isSelectedTab,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isSelectedTab) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
