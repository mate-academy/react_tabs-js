import classNames from 'classnames';

export const Tabs = ({ tabs, tabSelected, onTabSelected, activeTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({
              'is-active': tab.id === activeTabId,
            })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                // console.log(tabSelected);
                onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabSelected.content}
    </div>
  </div>
);
