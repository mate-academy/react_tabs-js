import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const checkedSelectedIdTable =
    tabs.find(e => e.id === selectedTabId)?.id || tabs[0].id;

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <>
                  <li
                    key={tab.id}
                    className={cn({
                      'is-active': checkedSelectedIdTable === tab.id,
                    })}
                    data-cy="Tab"
                  >
                    <a
                      href={`#${tab.id}`}
                      data-cy="TabLink"
                      onClick={() => {
                        if (tab.id !== checkedSelectedIdTable) {
                          onTabSelected(tab);
                        }
                      }}
                    >
                      {tab.title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(e => e.id === checkedSelectedIdTable).content ||
            tabs[0].content}
        </div>
      </div>
    </>
  );
};
