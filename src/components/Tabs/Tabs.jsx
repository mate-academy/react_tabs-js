import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let internalActiveTab = tabs.find(tab => tab.id === activeTabId);

  let internalActiveTabId = activeTabId;

  if (!internalActiveTab) {
    const [firstTab] = tabs;

    internalActiveTab = firstTab;
    internalActiveTabId = firstTab.id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const tabSelect = () => {
              if (internalActiveTabId !== tab.id) {
                onTabSelected(tab.id);
              }
            };

            return (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': internalActiveTabId === tab.id,
                })}
                data-cy="Tab"
              >
                <a href={`#${tab.id}`} data-cy="TabLink" onClick={tabSelect}>
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {internalActiveTab.content}
      </div>
    </div>
  );
};
