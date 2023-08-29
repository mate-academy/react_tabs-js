import cn from 'classnames';
import { findCurrentElementById } from '../../utils/helpers';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const actualTab = findCurrentElementById(tabs, selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={cn({
                  'is-active': actualTab.id === id,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (id !== actualTab.id) {
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
        {actualTab.content}
      </div>
    </div>
  );
};
