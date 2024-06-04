import cn from 'classnames';

export const Tabs = ({ tabs, query, setQuery }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({
            'is-active': tab.title !== undefined && tab.title === query,
          })}
        >
          <a
            key={tab.id}
            data-cy="TabLink"
            onClick={element => {
              setQuery(tab.title);
            }}
            href={`#${tab.id}`}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
