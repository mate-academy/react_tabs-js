import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <div data-cy="TabsComponent">
    <div
      className="tabs is-boxed"
      data-cy="tab-content"
    >
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn({ 'is-active': tab.id === selectedTab.id })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              onClick={() => onTabSelected(tab)}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div
      className="block"
      data-cy="TabContent"
    >
      {selectedTab.content}
    </div>
  </div>
);
