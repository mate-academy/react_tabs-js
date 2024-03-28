export const Tabs = ({ selectedTabId, onTabSelected, tabs }) => {
  let validSelectedTabId = selectedTabId;
  const isValidSelectedTab = tabs.some(tab => tab.id === selectedTabId);

  if (!isValidSelectedTab && tabs.length > 0) {
    validSelectedTabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { title, id } = tab;
            const handleClick = () => {
              if (validSelectedTabId !== id) {
                onTabSelected(tab);
              }
            };

            const activeClass = validSelectedTabId === id && 'is-active';

            return (
              <li key={id} className={`${activeClass}`} data-cy="Tab">
                <a onClick={handleClick} href={`#${id}`} data-cy="TabLink">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Some text {validSelectedTabId.split('-')[1]}
      </div>
    </div>
  );
};
