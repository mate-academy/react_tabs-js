import cn from 'classnames';

export const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const handleClick = tab => {
    if (tab.id !== activeTab.id) {
      setActiveTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({ 'is-active': activeTab.id === tab.id })}
              >
                <a
                  data-cy="TabLink"
                  href={`#${tab.id}`}
                  onClick={() => {
                    handleClick(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
