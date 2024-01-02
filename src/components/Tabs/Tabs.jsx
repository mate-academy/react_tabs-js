import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          // eslint-disable-next-line
          <li
            className={cn({ 'is-active': selectedTab.id === tab.id })}
            data-cy="Tab"
            onClick={() => {
              if (selectedTab !== tab) {
                onTabSelected(tab);
              }
            }}
            key={tab.id}
          >
            <a
              id={tab.id}
              href={`#${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
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
