import cn from 'classnames';

export const Tabs = ({ setTab, tab, tabs }) => {
  const { content } = tabs.find(el => el.id === tab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(el => (
            <li
              className={cn({
                'is-active': tab === `${el.id}`,
              })}
              data-cy="Tab"
            >
              <a
                href="#tab-1"
                data-cy="TabLink"
                onClick={() => setTab(`${el.id}`)}
              >
                {el.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
