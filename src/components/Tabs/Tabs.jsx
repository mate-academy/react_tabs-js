import cn from 'classnames';

export const Tabs = (props) => {
  const {
    tabs,
    onTabSelected,
    selectedTabId,
  } = props;

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);
  const isTabNameCorrect = tabs.map(tab => tab.id).includes(selectedTabId);

  const handleTabSelect = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={cn({
                'is-active': tab.id === selectedTabId
                || (index === 0 && !isTabNameCorrect),
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};
