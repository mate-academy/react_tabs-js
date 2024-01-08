import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab, idx) => (
          <li
            className={classNames({ 'is-active': tab.id === selectedTab.id })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#tab-${idx + 1}0`}
              data-cy="TabLink"
              onClick={() => tab.id !== selectedTab.id && onTabSelected(tab)}
            >
              {`Tab ${idx + 1}0`}
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
