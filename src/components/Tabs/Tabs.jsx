import cn from 'classnames';

export const Tabs = (tabs, { selectedTabId }, onTabSelected) => (
  <>
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={cn({ 'is-active': () => tab.id === selectedTabId })}
          data-cy="Tab"
        >
          <a
            onClick={() => {
              onTabSelected(tab.id);
            }}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))
      }
    </ul>
    <div className="block" data-cy="TabContent">
      {tabs.filter()}
    </div>
  </>
);
