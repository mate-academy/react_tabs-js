import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({
              'is-active': selectedTabId === tab.id,
            })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href="#tab-1"
              data-cy="TabLink"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
  </div>
);
