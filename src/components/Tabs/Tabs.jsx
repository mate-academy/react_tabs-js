import cn from 'classnames';

export const Tabs = ({ selectedTabId, onTabSelected, tabs }) => {
  const fondTab = tabs.find(tab => tab.id === selectedTabId.id)
    ? selectedTabId.id
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn(
                { 'is-active': fondTab === tab.id },
              )}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => tab.id !== fondTab && onTabSelected(tab)}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTabId.content}
      </div>
    </div>
  );
};
