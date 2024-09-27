import cn from 'classnames';

export const Tabs = ({ tabs, activeTab, onTabSelected }) => {
  if (activeTab === undefined) {
    const [firstTab] = tabs;

    activeTab = firstTab;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': activeTab?.id === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                onClick={() => {
                  if (activeTab.id !== tab.id) {
                    onTabSelected(tab.id);
                  }
                }}
                defaultValue={tab.id}
                href={`#${tab.id}`}
                data-cy="TabLink"
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
