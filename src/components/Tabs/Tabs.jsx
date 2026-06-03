import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const {content} = activeTab;

  return (

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }) => (
            <li
              key={id}
              className={cn({ 'is-active': id === activeTab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => activeTabId !== id && onTabSelected(id)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>


      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>

  );
};
