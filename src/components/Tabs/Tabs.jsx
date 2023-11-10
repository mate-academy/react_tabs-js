import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, setSelectedTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames({ 'is-active': tab.id === selectedTabId })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => setSelectedTabId(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="tab-content">
      {tabs.find(tab => tab.id === selectedTabId)?.content}
    </div>
  </div>
);
