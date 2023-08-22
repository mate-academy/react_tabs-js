import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
  onTabSelected,
}) => (
  <div
    data-cy="TabsComponent"
  >
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            className={cn({ 'is-active':
            (!tabs.find(item => (item.id === selectedTabId)) && tabs[0] === tab)
            || (selectedTabId) === tab.id })}
            key={tab.id}
          >
            <a
              data-cy="TabLink"
              href={`#${tab.id}`}
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {(tabs.find(tab => tab.id === selectedTabId) || tabs[0]).content}
    </div>
  </div>
);
