import cn from 'classnames';
import { findTabById } from '../../utils';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const findedTab = findTabById(tabs, selectedTabId);
  const firstTab = tabs[0];

  const validTab = findedTab ?? firstTab;

  const isActive = id => validTab.id === id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={cn({ 'is-active': isActive(id) })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isActive(id)) {
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
        {findTabById(tabs, selectedTabId)?.content}
      </div>
    </div>
  );
};
