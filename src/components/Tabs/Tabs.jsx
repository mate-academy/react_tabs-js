const ACTIVE_STYLE = 'is-active';

export const Tabs = ({
  tabs,
  selectedId,
  onTabSelected,
}) => {
  const className = tabId => ((tabId === selectedId
    || (!selectedId && tabId === tabs[0].id))
    ? ACTIVE_STYLE : null);

  return (
    tabs.map((tab) => {
      const { id, title } = tab;

      const linkEventHandler = (event) => {
        event.preventDefault();
        if (selectedId !== id) {
          onTabSelected(tab);
        }
      };

      return (
        <li
          key={id}
          data-cy="Tab"
          className={className(id)}
        >
          <a
            data-cy="TabLink"
            href={`#${id}`}
            onClick={linkEventHandler}
          >
            {title}
          </a>
        </li>
      );
    }));
};
