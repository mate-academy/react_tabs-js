export const Tabs = ({ tabs, onTabSelected, selectedTab }) => {
  const handleClick = tab => selectedTab.id !== tab.id && onTabSelected(tab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              className={`${tab.id === selectedTab.id ? 'is-active' : ''}`}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" key={selectedTab.id} data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
