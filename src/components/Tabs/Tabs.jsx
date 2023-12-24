export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const realTabId = checkSelectedTabId(tabs, selectedTabId);

  const changeTab = (neededTab) => {
    if (neededTab.id !== selectedTabId) {
      onTabSelected(neededTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li data-cy="Tab" key={tab.id} className={tab.id === realTabId ? `is-active` : ''}>
                <a href={`#${tab.id}`} data-cy="TabLink" onClick={() => changeTab(tab)}>{tab.title}</a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          tabs.filter(tab => tab.id === realTabId)[0].content
        }
      </div>
    </div>
  );
};

function checkSelectedTabId(tabs, selectedTabId) {
  const realIds = [];

  tabs.forEach(tab => realIds.push(tab.id));

  if (realIds.includes(selectedTabId)) {
    return selectedTabId;
  }

  return 'tab-1';
}
