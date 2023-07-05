import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
  onTabSelected,
}) => {
  const currentTabId = tabs.find(tab => tab.id === selectedTabId)?.id
    || tabs[0].id;

  function getVisibleContent(allTabs) {
    const obj = allTabs.find(tab => currentTabId === tab.id);

    return obj.content;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': currentTabId === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (currentTabId !== tab.id) {
                    onTabSelected(tab);
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
        {getVisibleContent(tabs)}
      </div>
    </div>
  );
};
