import cn from 'classnames';

export const Tabs = ({ activeTabId, onTabSelected, tabs }) => {
  const checkId = tabs.some(tab => tab.id === activeTabId)
    ? activeTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === checkId })}
              data-cy="Tab"
            >
              <a
                onClick={() => tab.id !== checkId && onTabSelected(tab.id)}
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
        {tabs.filter(tab => tab.id === checkId)[0].content}
      </div>
    </div>
  );
};
