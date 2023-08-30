import cl from 'classnames';
import { findSelectedTabById } from '../../helper';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = findSelectedTabById(tabs, selectedTabId);

  function handlerOnTabSelected(tab, isActive) {
    if (!isActive) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { title, id } = tab;
            const isActive = selectedTab.id === id;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={cl({ 'is-active': isActive })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handlerOnTabSelected(tab, isActive)}
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
