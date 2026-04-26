export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) ?? tabs[0];

  function getTab(tab) {
    const isActive = tab.id === activeTab.id;

    function setActiveTab() {
      if (!isActive) {
        onTabSelected(tab.id);
      }
    }

    return (
      <li className={isActive ? 'is-active' : ''} data-cy="Tab" key={tab.id}>
        <a href={`#${tab.id}`} data-cy="TabLink" onClick={setActiveTab}>
          {tab.title}
        </a>
      </li>
    );
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>{tabs.map(getTab)}</ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
