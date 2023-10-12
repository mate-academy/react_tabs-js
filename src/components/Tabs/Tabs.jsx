import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const setCurrent = (tabId) => {
    if (tabId !== selectedTabId) {
      onTabSelected(tabId);
    }
  };

  const getSelected = () => tabs.find(el => el.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': tab.id === selectedTabId,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => setCurrent(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId !== tabs[0].id
          ? getSelected().content
          : tabs[0].content
        }
      </div>
    </div>
  );
};
