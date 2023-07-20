const ACTIVE_STYLE = 'is-active';

export const Tabs = ({
  tabs,
  selectedId,
  selectedContent,
  onTabSelected,
}) => {
  const linkEventHandler = (event, id, tab) => {
    event.preventDefault();
    if (selectedId !== id) {
      onTabSelected(tab);
    }
  };

  const className = tabId => ((tabId === selectedId
    || (!selectedId && tabId === tabs[0].id))
    ? ACTIVE_STYLE : null);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
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
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedContent}
      </div>
    </div>
  );
};
