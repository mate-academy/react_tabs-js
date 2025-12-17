import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, setActiveTabId, activeTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => (
          <li
            className={cn({ 'is-active': id === activeTabId })}
            data-cy="Tab"
            key={id}
          >
            <a
              href={`#${id}`}
              data-cy="TabLink"
              onClick={() => setActiveTabId(id)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {activeTab.content}
    </div>
  </div>
);
