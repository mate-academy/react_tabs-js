import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, changeTab }) => {
  const activeTab = tabs.find(tab => tab.id === selectedTab);
  const changeSeletedTab = (tab) => {
    if (tab.id !== selectedTab) {
      changeTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': selectedTab === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => changeSeletedTab(tab)}
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
