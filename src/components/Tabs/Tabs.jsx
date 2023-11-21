import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">

        <ul>

          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={cn({
                'is-active': selectedTab.id === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => {
                  if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
                  }

                  event.preventDefault();
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}

        </ul>

      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>

    </>
  );
};
