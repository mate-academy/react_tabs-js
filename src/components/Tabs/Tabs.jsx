import clsx from 'clsx';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  function getActiveTab(searchTabId, tabList) {
    let result = tabList.find(item => item.id === searchTabId);

    if (result === undefined) {
      const [firstTab] = tabList;

      result = firstTab;
    }

    return result;
  }

  const preparedTab = getActiveTab(activeTabId, tabs);

  return (
    <div className="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={clsx(preparedTab.id === tab.id && 'is-active')}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== preparedTab.id) {
                      onTabSelected(tab.id);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {preparedTab.content}
      </div>
    </div>
  );
};
