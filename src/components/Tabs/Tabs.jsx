import className from 'classnames';

export const Tabs = ({
  selectedTabId,
  onTabSelected,
  tabs,
}) => {
  const activeTab = tabs
    .find(tab => tab.id === selectedTabId)
      || tabs[0];

  const onClickHandler = (tab) => {
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
              className={className({
                'is-active': activeTab.id === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                onClick={() => onClickHandler(tab)}
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
        {activeTab.content}
      </div>
    </div>
  );
};
