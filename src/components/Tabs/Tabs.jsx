import cn from 'classnames';

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const selectedTab
    = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  const handleClick = (tab) => {
    if (selectedTab.id !== tab.id) {
      onTabSelected(tab);
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
            {tabs.map((tab) => {
              const {
                id, title,
              } = tab;

              return (
                <li
                  key={id}
                  className={cn({
                    'is-active': id === selectedTab.id,
                  })}
                  data-cy="Tab"
                >
                  <a
                    data-cy="TabLink"
                    href={`#${id}`}
                    onClick={() => handleClick(tab)}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="block"
          data-cy="TabContent"
        >
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};
