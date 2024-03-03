export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  function activeTab(currentTab) {
    if (selectedTab.title !== currentTab.title) {
      return (
        <a
          href={`#${currentTab.id}`}
          data-cy="TabLink"
          onClick={() => onTabSelected(currentTab)}
        >
          {currentTab.title}
        </a>
      );
    }

    return (
      <a href={`#${currentTab.id}`} data-cy="TabLink">
        {currentTab.title}
      </a>
    );
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={selectedTab.title === tab.title ? 'is-active' : ''}
              data-cy="Tab"
            >
              {activeTab(tab)}
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
