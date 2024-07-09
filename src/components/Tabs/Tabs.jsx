export const Tabs = ({
  tabs,
  activeTabId,
  onTabSelected,
  onTitle,
  onContent,
}) => {
  return (
    <ul>
      {tabs.map(element => (
        <li
          className={element.id === activeTabId ? 'is-active' : ''}
          data-cy="Tab"
          key={element.id}
        >
          <a
            href={`#${element.id}`}
            data-cy="TabLink"
            id={element.id}
            onClick={event => {
              if (event.target.className !== 'is-active') {
                onTabSelected(event.target.id);
                onTitle(element.title);
                onContent(element.content);
              }
            }}
          >
            {element.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
