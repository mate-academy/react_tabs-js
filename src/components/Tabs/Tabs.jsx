import cn from 'classnames';

export const Tabs = ({
  tabs,
  onTabSelected,
  selectTabId,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {
          tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === selectTabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectTabId !== tab.id
                  && onTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))
        }
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectTabId).content}
    </div>
  </div>
);
