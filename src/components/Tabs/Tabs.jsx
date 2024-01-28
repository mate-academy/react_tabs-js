import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({ 'is-active': selectedTab.id === e.id })}
            key={e.id}
            data-cy="Tab"
          >
            <a
              href={`#${e.id}`}
              data-cy="TabLink"
              onClick={() => e.id !== selectedTab.id && onTabSelected({ ...e })}
            >
              {e.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);
