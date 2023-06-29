import cn from 'classnames';

export const Tabs = ({ selectedTabId, onTabSelected, tabs }) => {
  const { id } = selectedTabId;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={cn(
              { 'is-active': id === tab.id },
            )}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => tab.id !== id && onTabSelected(tab)}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
