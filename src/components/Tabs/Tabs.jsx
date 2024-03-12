export const Tabs = ({ tabs, onTabSelected, selectedTab }) => {
  const tabClick = title => {
    onTabSelected(title);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={selectedTab === tab.title ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tabClick(tab.title)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.title === selectedTab)?.content}
      </div>
    </div>
  );
};
