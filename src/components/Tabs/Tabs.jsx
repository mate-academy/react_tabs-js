import cn from 'classnames';

export const Tabs = ({ tabs, activeId, setId, setTitle, setContent }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={cn({ 'is-active': tab.id === activeId })}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={e => {
              e.preventDefault();

              setId(tab.id);
              setTitle(tab.title);
              setContent(tab.content);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
