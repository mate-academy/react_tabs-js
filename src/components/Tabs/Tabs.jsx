import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <ul>
      {tabs.map(e => (
        <li
          className={cn({ 'is-active': selectedTab.id === e.id })}
          data-cy="Tab"
          key={e.id}
        >
          <a
            href={`#${e.id}`}
            data-cy="TabLink"
            onClick={() => e.id !== selectedTab.id && onTabSelected({ ...e })}
          >
            {e.title}
          </a>
        </li>
      ))}
    </ul>
    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </>
);
