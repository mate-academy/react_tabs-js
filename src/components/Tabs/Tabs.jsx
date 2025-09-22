/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  if (!tabs || tabs.length === 0) {
    return null;
  }

  const activeTabExist = tabs.some(tab => tab.id === activeTabId);
  const effectiveActiveId = activeTabExist ? activeTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                key={tab.id}
                className={classNames({
                  'is-active': effectiveActiveId === tab.id,
                })}
                data-cy="Tab"
                onClick={() => {
                  if (tab.id !== effectiveActiveId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === effectiveActiveId).content}
      </div>
    </div>
  );
};
