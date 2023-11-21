import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedIdCheck = (
    tabs.find(tab => tab.id === selectedTabId) !== undefined
      ? selectedTabId
      : tabs[0].id
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === selectedIdCheck })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(tab.id) !== selectedIdCheck
                  ? () => onTabSelected(tab)
                  : undefined}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedIdCheck).content}
      </div>
    </div>
  );
};
