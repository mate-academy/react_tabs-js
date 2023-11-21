import classNames from 'classnames';

export function Tabs({ tabs, selectedTabId, onTabSelected }) {
  const getSelectedTab = tabId => (tabs.find(tab => tab.id === selectedTabId));

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === selectedTabId },
              )}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab || tabs[0]);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getSelectedTab(selectedTabId || tabs[0]).content}
      </div>
    </div>
  );
}
