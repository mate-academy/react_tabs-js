import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames({ 'is-active': tab.id === activeTabId })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => tab.id !== activeTabId && onTabSelected(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      {/* <ul>
        <li className="is-active" data-cy="Tab" onClick={() => {}}>
          <a href="#tab-1" data-cy="TabLink">
            Tab 1
          </a>
        </li>

        <li data-cy="Tab">
          <a href="#tab-2" data-cy="TabLink">
            Tab 2
          </a>
        </li>

        <li data-cy="Tab">
          <a href="#tab-3" data-cy="TabLink">
            Tab 3
          </a>
        </li>
      </ul> */}
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === activeTabId)?.content}
    </div>
  </div>
);
