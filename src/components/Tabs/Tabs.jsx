export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab =
    tabs.find(tab => {
      return tab.id === activeTabId;
    }) ?? tabs[0];

  const tabChanger = id => event => {
    event.preventDefault();
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${currentTab.title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={tab.id === currentTab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a href="#tab" onClick={tabChanger(tab.id)} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent" key={currentTab.id}>
          {currentTab.content}
        </div>
      </div>
    </div>
  );
};
