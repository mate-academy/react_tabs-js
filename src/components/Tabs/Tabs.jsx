
import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => (
          <li
            key={id}
            className={cn('', { 'is-active': id === activeTabId })}
            data-cy="Tab"
          >
            <a
              href={`#tab-${id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(id)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
