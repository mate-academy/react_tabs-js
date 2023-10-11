import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={cn({ 'is-active': selectedTabId === tab.id })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              onClick={() => {
                setSelectedTabId(tab.id);
              }}
              href="#tab-1"
              data-cy="TabLink"
            >
              Tab 1
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      Some text 1
    </div>
  </div>
);
