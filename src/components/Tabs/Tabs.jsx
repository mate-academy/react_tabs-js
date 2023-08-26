import classnames from 'classnames';

function getTab(tabsList, currentId) {
  return tabsList.find(tab => tab.id === currentId) || tabsList[0];
}

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = getTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classnames({
                'is-active': currentTab.id === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                onClick={() => {
                  if (currentTab.id !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
