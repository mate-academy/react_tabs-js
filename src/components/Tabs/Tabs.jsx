import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTabId = tabs.some(item => item.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;
  const getSelected = () => tabs.find(el => el.id === currentTabId);
  const currentSelected = (tab) => {
    if (tab.id !== currentTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === currentTabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => currentSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getSelected().content}
      </div>
    </div>
  );
};
