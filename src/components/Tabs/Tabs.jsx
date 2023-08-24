import cn from 'classnames';
import { DEFAULT_TAB_ID, findTabById } from '../../utils';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  if (!findTabById(tabs, selectedTabId)) {
    onTabSelected(DEFAULT_TAB_ID(tabs));
  }

  const isActive = id => selectedTabId === id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
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
                    onTabSelected(tabs, id);
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
        {findTabById(tabs, selectedTabId).content}
      </div>
    </div>
  );
};
