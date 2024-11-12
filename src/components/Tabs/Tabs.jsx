export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const tabSelected = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const findActiveTab = tabs.find(item => {
    return item.id === activeTabId;
  });
  const ifIsActive = item => {
    if (item.id !== activeTabId) {
      onTabSelected(item.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              key={item.id}
              className={item.id === tabSelected.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${item.id}`}
                data-cy="TabLink"
                onClick={() => ifIsActive(item)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findActiveTab ? findActiveTab.content : 'Some text 1'}
      </div>
    </div>
  );
};
