/* eslint-disable no-lone-blocks */
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeId = (tabs.find(tab => tab.id === activeTabId) || tabs[0]).id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({
                  'is-active': activeId === tab.id,
                })}
              >
                <a
                  key={tab.id}
                  data-cy="TabLink"
                  onClick={() => {
                    if (activeId !== tab.id) {
                      onTabSelected(tab.id);
                    }
                  }}
                  href={`#${tab.id}`}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {tabs.map(
        tab =>
          tab.id === activeId && (
            <div className="block" data-cy="TabContent" key={tab.id}>
              {tab.content}
            </div>
          ),
      )}
    </div>
  );
};
