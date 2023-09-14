import cn from 'classnames';
import { findTabById } from '../../utils/utilFunctions';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const validTab = findTabById(tabs, selectedTabId);

  const onClick = (tab) => {
    if (tab.id !== selectedTabId) {
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
              className={cn({ 'is-active': validTab.id === tab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {validTab.content}
      </div>
    </div>
  );
};
