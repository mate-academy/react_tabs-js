import cn from 'classnames';

export const Tabs = ({ tabs, setSelectedTabs, state, setState,
  onTabSelected }) => (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': state === tab.id })}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                onClick={() => onTabSelected(tab.id)}
                href="#tab-1"
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map(tab => (
          `${state === tab.id ? tab.content : ''}`
        ))}
      </div>
    </div>
);
