import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, tabContent, onTabSelected }) => {
  if (!tabs || tabs.length === 0) return null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === activeTabId })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== activeTabId) {
                    onTabSelected(tab.id);
                  }
                }}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent.content}
      </div>
    </div>
  );
};
