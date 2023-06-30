import cn from 'classnames';

export const Tabs = ({ selectedTabId, onTabSelected, tabs, content }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={cn(
              { 'is-active': selectedTabId === tab.id },
            )}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => tab.id !== selectedTabId && onTabSelected(tab.id)}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {content}
    </div>
  </div>
);
