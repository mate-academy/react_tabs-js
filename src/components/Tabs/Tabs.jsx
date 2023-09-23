import cn from 'classnames';

export const Tabs = ({ onTabSelected, tabs, selectedTabId }) => {
  const setTab = tabs.find(el => el.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>

          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === setTab.id })}
            >
              <a
                onClick={() => {
                  // eslint-disable-next-line no-unused-expressions
                  tab.id !== setTab.id && onTabSelected(tab);
                }
              }
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
        {setTab.content}
      </div>
    </div>
  );
};
