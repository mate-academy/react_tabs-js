import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onSelectedTabIdChange,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabChange = (id) => {
    if (id !== selectedTabId) {
      onSelectedTabIdChange(id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={cn({ 'is-active': selectedTab.id === tab.id })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabChange(tab.id)}
                >
                  {`${tab.title}`}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {`${selectedTab.content}`}
        </div>
      </div>
    </div>
  );
};
