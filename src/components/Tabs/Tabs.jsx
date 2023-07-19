const ACTIVE_STYLE = 'is-active';

export const Tabs = ({
  tabs,
  selectedId,
  onTabSelected,
}) => {
  const className = tabId => ((tabId === selectedId
    || (!selectedId && tabId === tabs[0].id))
    ? ACTIVE_STYLE : null);

  const linkEventHandler = (event, id, tab) => {
    event.preventDefault();
    if (selectedId !== id) {
      onTabSelected(tab);
    }
  };

  return (
    tabs.map((tab) => {
      const { id, title } = tab;

      return (
        <li
          key={id}
          data-cy="Tab"
          className={className(id)}
        >
          <a
            data-cy="TabLink"
            href={`#${id}`}
            onClick={event => linkEventHandler(event, id, tab)}
          >
            {title}
          </a>
        </li>
      );
    }));
};
