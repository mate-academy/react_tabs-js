import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, foundTab }) => {
  const { id: foundId, content } = foundTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={classNames(id === foundId ? 'is-active' : '')}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(id)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {content}
      </div>
    </div>
  );
};
