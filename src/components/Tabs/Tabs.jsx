import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setselectedTabId,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn({
              'is-active': selectedTabId === tab,
            })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                setselectedTabId(tab);
                if (selectedTabId !== tab) {
                  onTabSelected(selectedTabId);
                }
              }}
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
      {selectedTabId.content}
    </div>
  </div>

);
